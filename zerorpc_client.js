var zerorpc = require("zerorpc");
var filesystem = require("fs");
function get_basic_response(user_data)
{

  var contents = filesystem.readFileSync('practice_file.txt').toString();
  var new_data = contents.split(":");
  var converter = {};
  for (var i = 0; i < new_data.length -1; i++)
  {
    converter[new_data[i]] = new_data[i+1];
  }
  if (user_data in converter)
  {
    return converter[user_data];
  }
  else {
    return "I do not understand";
  }
};

//this is run second

var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

var message = "";
//do not need loops with zerorpc, one is already created
client.invoke("hello", "hello", function(error, res, more) { //"hello" is the method in the python file
    try
    {
      //console.log("here");
      console.log("got a new message:"+res.toString('utf8'));
      message = get_basic_response(res.toString('utf8'));
      

    }
    catch(e)
    {

    }


});
