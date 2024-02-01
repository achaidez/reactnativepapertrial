const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`🚀 Listening on port ${port}`);
});

app.get('/', function (req, res) {
  res.send('Hello')
})