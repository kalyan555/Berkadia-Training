let express = require("express");
let app = express();
//built in are reffered as inbuilt of express which is static which uses the files of a folder to act as the resource web pages
app.use(express.static('public'));
app.listen(3000, () => console.log("listenning"));