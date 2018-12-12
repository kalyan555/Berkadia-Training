let express = require("express");
let app = express();

// to create errors and to show them
app.get("/", function (req, res) {
    throw new Error("BROKEN"); // Express will catch this on its own.
  });

app.listen(3000, () => console.log("listenning"));