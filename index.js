var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


	console.log('asdkfja;slkdjfa;sljfd"0');
app.get('/', function(request, response) {
	console.log("hi jester pogi");
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
	  console.log('Nasdfasfasdfasdfasf');
  console.log('Node app is running on port', app.get('port'));

});


