function MinMax(arr){
   var flag=0;
   var max=Number(arr[0]);
   var min=Number(arr[0]);
   for(var i=1;i<arr.length;i++){
    var temp=Number(arr[i]);
    if(temp>max)
      max=temp;
    if(temp<min)
      min=temp;
   }
   console.log("Max:",max," Min:",min);
 }
 MinMax(process.argv.slice(2));

  /*
Command:
node MinMax 3 6 8 7 6 9
Output:
Max: 9  Min: 3
 */