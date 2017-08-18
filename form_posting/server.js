var express = require('express');
var bodyParser = require('body-parser');
var app  = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); //here, have to run html file as 'index.html'
//app.use(express.bodyParser());

app.post("/", function(req, res) {
  //res.send('You sent the email "' + req.body.email + '".');
  console.log("email sent:"+req.body.my_email);
  console.log("name sent:"+req.body.user_funny_name);
  console.log("description sent:"+req.body.the_user_description);
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
