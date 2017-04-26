// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User   = require('./models/user'); // get our mongoose model
    
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
    name: 'Nick Cerminara', 
    password: 'password',
    child: true 
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

app.use('/user', user_controller);

//==================================================
//for storing picture
//+==========================================
var multer = require("multer");
 
var storage = multer.diskStorage({
        destination: './public/users',
        filename: function (req, file, cb) {
          let ext
          console.log(file.mimetype)
            switch (file.mimetype) {
                case 'image/jpeg':
                    ext = '.jpeg';
                    break;
                case 'image/png':
                    ext = '.png';
                    break;
            }
            cb(null, file.originalname + ext);
        }
    });

var upload = multer({storage: storage});

app.use(upload.single('photo'));

app.post('/uploadUserImage/:name', function (req, res) {
    // console.log(JSON.stringify(req.body.photo)) // form fields
    console.log(JSON.stringify(req.body)) // form fields
    console.log(req.photo) // form files
    console.log(req.file) // form files
    res.send(req.body.photo);
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);