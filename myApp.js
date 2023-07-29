let express = require('express');
let app = express();

app.get('/', function(req, res) {
  let path = __dirname + "/views/index.html";
  res.sendFile(path);
});

// app.get('/', function(req, res) {
//   res.send("Hello Express");
// });

// console.log("Hello World")

module.exports = app;
