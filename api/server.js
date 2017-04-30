// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var path        = require('path');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./models/user'); // get our mongoose model
var Child   = require('./models/child'); // get our mongoose model
var CareTaker   = require('./models/caretaker'); // get our mongoose model
    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3001; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

var Promise = require("bluebird");

mongoose.Promise = Promise;


var user_controller = require('./controllers/userController');
// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.get('/setup', function(req, res) {

  // create a sample user
  var nick = new User({ 
    name: 'Nick', 
    password: 'password',
    child: true 
  });

  var erin = new User({ 
    name: 'Erin', 
    password: 'password',
    child: true 
  });

  var initha = new User({ 
    name: 'Initha', 
    password: 'password',
    child: true 
  });

  var senthil = new User({ 
    name: 'Senthil', 
    password: 'password',
    child: true 
  });

  var stef = new User({ 
    name: 'Stefanie', 
    password: 'password',
    child: true 
  });
  // save the sample user
  nick.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  initha.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  erin.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  senthil.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  stef.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  var nickChild = new Child({
    name:'Nick',
    morningbolus: 7,
    afternoonbolus: 8,
    dinnerbolus: 5,
    basal:17
  });

  var erinChild = new Child({
    name:'Erin',
    morningbolus: 7,
    afternoonbolus: 8,
    dinnerbolus: 5,
    basal:17
  });

  var inithaChild = new Child({
    name:'Initha',
    morningbolus: 7,
    afternoonbolus: 8,
    dinnerbolus: 5,
    basal:17
  });


  nickChild.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  inithaChild.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  erinChild.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });

  var senthilCareTaker = new CareTaker ({
    name:'Senthil',
    phone: '123456789'
  });

  var stefCareTaker = new CareTaker ({
    name:'Stefanie',
    phone: '123456789'
  });

  senthilCareTaker.save(function(err){
    if (err) throw err;
  });

  stefCareTaker.save(function(err){
    if (err) throw err;
  });

});

app.use('/addct/',function(req,res){
  CareTaker. findOne({"name":"Senthil"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Nick" },
      { $push: { "caretakers": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
      });
    });
  CareTaker. findOne({"name":"Senthil"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Initha" },
      { $push: { "caretakers": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
      });
    });
  CareTaker. findOne({"name":"Senthil"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Erin" },
      { $push: { "caretakers": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
      });
    });
  CareTaker. findOne({"name":"Stefanie"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Erin" },
      { $push: { "caretakers": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
      });
    });
  CareTaker. findOne({"name":"Stefanie"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Initha" },
      { $push: { "caretakers": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
    });
  });

  Child. findOne({"name":"Initha"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Senthil" },
      { $push: { "children": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
    });
  });

  Child. findOne({"name":"Erin"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Senthil" },
      { $push: { "children": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
    });
  });

  Child. findOne({"name":"Initha"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Stefanie" },
      { $push: { "children": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
    });
  });

  Child. findOne({"name":"Erin"}, function (err,doc){
    console.log("doc" + doc)
    User.findOneAndUpdate({ "name": "Stefanie" },
      { $push: { "children": doc._id } },{ new: true }, function(error, data) {
        console.log(data)
        // Send any errors to the browser
          if (error) {
            res.send(error);
          } else {
            console.log(data)
          }
    });
  });
})

app.use('/user', user_controller);

//==================================================
//for storing picture
//+==========================================
var multer = require("multer");
 
var storage = multer.diskStorage({
  destination: './public/users',
  filename: function (req, file, cb) {
    let ext
    console.log("body");
    console.log(req.body);
    console.log(file.mimetype)
            
    switch (file.mimetype) {
      case 'image/jpeg':
        ext = '.jpeg';
        break;
      case 'image/png':
        ext = '.png';
        break;
    }
      // cb(null, file.originalname + ext);
    cb(null, req.body.filename + ext);

  }
});

var upload = multer({storage: storage});

//when ever it sees File
app.use(upload.single('photo'));

app.post('/uploadUserImage/:name', function (req, res) {
    // console.log(JSON.stringify(req.body.photo)) // form fields
    console.log(JSON.stringify(req.body)) // form fields
    console.log(req.photo) // form files
    console.log(req.file) // form files
    res.send(req.body.photo);
});

app.get("/photos/:photo", function(req, res) {
  console.log(req.params.photo);
  res.sendFile(path.join(__dirname, './uploads/photos/27_profile.js'));
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);