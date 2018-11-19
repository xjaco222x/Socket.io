const express = require("express");
var app = express();

app.get('/', function(req, res){
  res.sendFile('C:/Users/Totvs-IV2/Desktop/socket.io/front/index.html');
});

module.exports = app;