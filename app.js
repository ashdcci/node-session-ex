var express 		= require('express');
var app         	= express();
var parser 		= require('body-parser');
var http	 	= require('http');
var path = require('path');
var expressValidator = require('express-validator');
var morgan      = require('morgan');
var engine = require('ejs-mate');
var flash = require('connect-flash');

var server = http.createServer(app);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('server',server);
var index = require('./routes/index');
app.use('/', index);


//Create-server++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
server.listen(6000,function(){
  console.log("Connected & Listen to port 6000 ");
});
