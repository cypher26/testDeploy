var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });

// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

// router.get("/js/jquery",function(req,res){
//   res.sendFile(path + "/js/jquery.js");
// });


app.use("",express.static(__dirname + '/views'));
app.use("js",express.static(__dirname + '/js'));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'), function() {
console.log('Node app is running on port', app.get('port'));

});


