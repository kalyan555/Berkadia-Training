var fs = require('fs');
function merge(resultfile,tempfile)
{
   var data=fs.readFileSync(tempfile, 'utf8').toString(); 
   fs.appendFileSync(resultfile, data+" ")
  console.log(tempfile+' is merged');
}

merge('final.txt','one.txt');
merge('final.txt','two.txt');
merge('final.txt','three.txt');
merge('final.txt','four.txt');

/*
Output:
node .\Synchronous.js
one.txt is merged
two.txt is merged
three.txt is merged
four.txt is merged */