var socket = io.connect("http://localhost:3000");

var message=document.getElementById("message");
var handle=document.getElementById("handle");
var button=document.getElementById("send");
var output=document.getElementById("output");
var feedback=document.getElementById("feedback");

button.addEventListener('click',function(){
    if(message.value.trim() != "" && handle.value.trim() != "" ){
    socket.emit('chat',{
        message: message.value,
        handle:handle.value
    })
    message.value = "";
}
});

message.addEventListener('keyup',function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        if(message.value.trim() != "" && handle.value.trim() != ""){
        socket.emit('chat',{
            message: message.value,
            handle:handle.value
        })
        message.value = "";
    }
}
  });

message.addEventListener('keypress',function(){
    if(handle.value!='')
        socket.emit("typing",handle.value);
})

socket.on("chat",function(data){
    feedback.innerHTML = '';
    if(data.handle==handle.value)
            output.innerHTML += '<p><strong class="user">You: </strong>' + data.message + '</p>';    
    else output.innerHTML += '<p><strong class="other">' + data.handle + ': </strong>' + data.message + '</p>';
})

socket.on("typing",function(data){
    feedback.innerHTML='<p>'+data+' is typing</p>';
})