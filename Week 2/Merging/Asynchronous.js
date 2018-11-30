var fs = require('fs');
function merge(resultfile,tempfile)
{
    fs.readFile(tempfile, 'utf8', function(err, data) {
    fs.appendFile(resultfile, data+" ", function (err) {
        if (err) throw data;
        console.log(tempfile+' is merged');
  
      });
});
}
 
merge('final.txt','one.txt');
merge('final.txt','two.txt');
merge('final.txt','three.txt');
merge('final.txt','four.txt');

/*Output:
node .\Asynchronous.js
one.txt is merged
two.txt is merged
three.txt is merged
four.txt is merged */
