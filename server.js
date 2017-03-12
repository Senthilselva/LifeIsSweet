var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

var passport = require("passport");
var passportJwt = require("passport-jwt");

var ExtractJwt = passportJwt.ExtractJwt;
var JwtStrategy = passportJwt.Strategy;

var users = [
{
	id: 1,
	name: 'senthil',
	password: "test"
},
{
	id: 2,
	name: 'stef',
	password:"test"
}]

var jwtOptions ={};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();

jwtOptions.secretOrKey = "rock";
//console.log("user1: ", users[_.findIndex(users, {id:1})])

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
	console.log("payload received", jwt_payload);

	//TODO : This should be a database call
	var user = users[_.findIndex(users, {id:jwt_payload.id})];

	if(user){
		next(null,user);
	} else {
		next(null,false);
	}

});

passport.use(strategy);

//TODO: 


var app = express();
app.use(passport.initialize());

//parse appliacation/ x-www-from-urlencoded
//for easier testing the Postman or plain HTML forms

app.use(bodyParser.urlencoded({
	extended: true
}))

//parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res){
	res.json({message:"Express is up!"})
});

app.post("/login", function(req,res){
	if(req.body.name && req.body.password){
		var name= req.body.name;
		var password = req.body.password;
	}

	//TODO: database call
	var user = users[_.findIndex(users, {name: name})];
	if(!user){
		res.status(401).json({message:"no such user found"});
	}

	if(user.password === req.body.password){
		var payload = {id: user.id};
		var token = jwt.sign(payload, jwtOptions.secretOrKey);
		res.json({message: "ok", token: token});
	} else {
		res.status(401).json({message: "passwords did not match"});
	}
});

app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});

app.listen(3000, function() {
  console.log("Express running");
});