function writeFile(data){
    var fs = require("fs");
    var res='';
    for(var i=1;i<data.length;i++){
        res=res+String(data[i])+' ';
    }
    fs.writeFile(String(data[0]),res, function (err) {
       if (err) {
          return console.error(err);
       }
       console.log("write successful");
       console.log("data written: \n"+res);
    });
    }
    
writeFile(process.argv.slice(2))