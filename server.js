var express = require('express') ; 

var app = express() ; 

//setting up the port
var port = process.env.PORT || 2626;

var client = require('twilio')('AC055c8cc931370c698abd3e47895b203e ','889faafa183be7de10c2ba9c36bb9a7f ') ;

var cookie = require('cookie-parser') ; 

var session =  require('express-session') ; 

var morgan = require('morgan') ;	

var flash = require('connect-flash');																																				

var mongoose = require('mongoose');

var passport = require('passport');

mongoose.connect('mongodb://localhost/db_drakle');
	
//require('./config/passport')(passport);

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}));

//setting up ejs for templating
app.set('view engine','ejs');

app.get('/testtwilio',function(req,res){
	client.sendMessage({
		to : '+91 8464806082',
		from : '+1 201-597-5124  ',
		body : 'I love you vamshi<3 =D '  
	},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
		}
	})
});

app.get('/testtwilio',function(req,res){
	client.sendMessage({
		to : '+91 8185867662',
		from : '+1 201-597-5124  ',
		body : 'I love you amod <3 =D '  
	},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
		}
	})
})


app.use(cookie()) ;
app.use(morgan('dev')) ; 

//required for passport
//saveUninitialized and resave is optional
app.use(session({
	secret : 'anystringoftext', 
	saveUninitialized : true ,
	resave : true 
}));

//log every request to console
 

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// app.use('/',function (req,res){
// 	res.send('write something') ;

// 	console.log(req.cookie) ;

// 	console.log(req.session) ;	 
// }) ;

//require('./apps/routes.js')(app,passport) ; 


app.listen(port) ;

console.log('server is running on port ' + port ) ;

