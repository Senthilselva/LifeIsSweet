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
  console.log("creating")
  console.log(req.body);
     // find the user
     let newUser =  new User(req.body);
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;
    if (user) {
      res.json({ success: false, message: 'User name already exist' });
    } else {
      console.log(newUser);
      
      newUser.save(function(err, data) {
        if (err) {
          console.log(err.errors)
          res.json({ err: err.errors.message });
        } else {
          console.log(data)
          console.log('User saved successfully');
          //if the user is a child
            if(data.child){
              let newChild = new Child({});
              newChild.name = req.body.name;
              newChild.morningbolus = parseInt(req.body.morningbolus);
              newChild.afternoonbolus = parseInt(req.body.afternoonbolus);
              newChild.dinnerbolus = parseInt(req.body.dinnerbolus);

              newChild.save(function(err,childData){
                if (err){
                  console.log(err.errors)
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
                  console.log(err.errors)
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

  // console.log("token"+token);
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

/*
router. post('/getUser/:name/', function(req, res) {
  console.log("getUSer")
  User.find({
    name: req.params.name   
  }, function(err, users) {
     if (err) throw err;
     console.log("users" + users[0].child)
     if (users[0].child == true){
      Child.find({
        name: users[0].name
      }, function(err, childData){
        if (err) throw err;
        console.log("User :  \n");
        console.log(users[0]);
        console.log("Child: \n");
        console.log(childData[0]);
        res.json({
          user: users[0],
          child: childData[0]
        });
      });
     } else {
       CareTaker.find({
        name: users[0].name
      }, function(err, careTakerData){
        if (err) throw err;
        console.log("User :  \n");
        console.log(users[0]);
        console.log("Care Taker: \n");
        console.log(careTakerData[0]);
        res.json({
          user: users[0],
          careTaker: careTakerData[0]
        });
        });
      }
    });
});   
*/

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

module.exports = router;
