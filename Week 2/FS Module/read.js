function readFile(filename){
var fs = require("fs");

fs.readFile(String(filename), function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("read successful,data is:");
   console.log(data.toString());
});
}

readFile(process.argv.slice(2))