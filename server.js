
var express = require('express');
var app = express();
var fs = require('fs');
var jsonData = {count:10, message:'hey'};
var port = 3000;

app.listen(port, function(){
  console.log('you are listening to port ',port);
});

app.get('/', function(req,res){
  fs.readFile('index.html', function(err, buffer){
    var html = buffer.toString();
    res.setHeader('Content-Type','text/html');
    res.send(html);
  });
});
