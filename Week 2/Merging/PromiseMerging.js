var fs = require('fs');

const merge = (resultfile, tempfile) =>
new Promise((resolve, reject) =>
  fs.readFile(tempfile, 'utf-8', (err, data) => {
    fs.appendFile(resultfile, data+" ", (err) => {
     return err ? reject(err) : console.log(tempfile+' is merged');
        })
    })
);

merge('final.txt','one.txt');
merge('final.txt','two.txt');
merge('final.txt','three.txt');
merge('final.txt','four.txt');

/*
node .\PromiseMerging.js
one.txt is merged
two.txt is merged
three.txt is merged
four.txt is merged
*/