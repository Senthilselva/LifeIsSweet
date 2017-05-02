var express = require('express');
var router  = express.Router();
var mongoose = require('mongoose')


var User   = require('../models/user'); // get our mongoose model
var Child   = require('../models/child');
var CareTaker   = require('../models/caretaker');


var jwt    = require('jsonwebtoken');
var config = require('../config'); 
mongoose.Promise = Promise;

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});   

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) 
      {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          user,
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   
    }
  });
});

router.post('/create', function(req, res) {
     // find the user
     let newUser =  new User(req.body);
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;
    if (user) {
      res.json({ success: false, message: 'User name already exist' });
    } else {
      
      newUser.save(function(err, data) {
        if (err) {
          console.log(err.errors)
          res.json({ err: err.errors.message });
        } else {
          //console.log('User saved successfully');
          //if the user is a child
            if(data.child){
              let newChild = new Child({});
              newChild.name = req.body.name;
              newChild.morningbolus = parseInt(req.body.morningbolus);
              newChild.afternoonbolus = parseInt(req.body.afternoonbolus);
              newChild.dinnerbolus = parseInt(req.body.dinnerbolus);

              newChild.save(function(err,childData){
                if (err){
                  //console.log(err.errors)
                  res.json({ err: err.errors.message });
                }
                else{
                  res.json({ success : true, 
                              childData });
                }
              }); 
            } else {
              //if the user is a caretaker
              let newCareTaker = new CareTaker({});
              newCareTaker.name = req.body.name;
              newCareTaker.phone = req.body.name;

              newCareTaker.save(function(err,careTaker){
                if(err){
                 // console.log(err.errors)
                  res.json({ err: err.errors.message });
                }
                else{
                  res.json({ success:true,
                             careTaker });
                }
              }); //newCareTaker
            }
        }
      }); //newUser
    }
  })
});

router.use(function(req, res, next) {

  console.log(req.headers['x-access-token']);
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

router. post('/getUser/:name/', function(req, res) {
  console.log("getUSer")
  User.find({  name: req.params.name })
    .populate("children")
    .populate("caretaker")
    .exec(function(err,doc){
      if(err) throw err;
      res.json(doc)
    })
});

router.post('/getChildren/',function(req,res) {
  User.find({
    child : true   
  },function(err, data){
    if (err) throw err;
    res.json(data);
  });
})

router.post('/getChild/:id',function(req,res) {
  console.log("getChild")
  console.log(req.params.id)

  Child.findOne({
    '_id':req.params.id   
  },function(err, data){
    if (err) throw err;
    console.log(data)
    res.json(data);
  });
  
})

router.post('/writemsg/:id/:message',function(req,res) {
  
  Child.findOneAndUpdate({ '_id':req.params.id },
    { $push: { "chat": req.params.message } },{ new: true }, function(err, data){
    if (err) throw err;
    res.json(data);
  });
  
})

module.exports = router;
