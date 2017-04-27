// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    name: {
	    type: String,
	    trim: true,
	    required: "Username is Required"
    },
    password: {
	    type: String,
	    trim: true,
	    required: "Password is Required",
	    validate: [
	      function(input) {
	        return input.length >= 4;
	      },
	      "Password should be longer."
	    ]
  },
  child: { //this is a flag SS
    	type: Boolean,
    	required: "Specify if you are a child" 
  },
  partners:{
  	  type: Array //Check 
  }

}));