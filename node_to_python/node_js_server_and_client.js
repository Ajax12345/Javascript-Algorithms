var express = require('express');
var bodyParser = require('body-parser');
var app  = express();
var zerorpc = require("zerorpc");


//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); //here, have to run html file as 'index.html'
//app.use(express.bodyParser());
var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

app.post("/", function(req, res) {
  //res.send('You sent the email "' + req.body.email + '".');
  var user_email = req.body.my_email;
  var user_name = req.body.user_funny_name;
  var user_description = req.body.the_user_description;
  client.invoke("hello", user_name, function(error, res, more) {
  });
  client.invoke("hello", user_email, function(error, res, more) {
  });
  client.invoke("hello", user_description, function(error, res, more) {
  });
  //console.log("email sent:"+req.body.my_email);
  //console.log("name sent:"+req.body.user_funny_name);
  //console.log("description sent:"+req.body.the_user_description);
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
