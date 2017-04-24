// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var childSchema = new Schema({
  // name: a trimmed, required string
  name: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // userCreated: the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // lastUpdated: a date type entry
  lastUpdated: { type: Date },
  basal : { 
    type : Number 
  },
  morningbolus : { 
    type : Number
  },
  afternoonbolus : { 
    type : Number
  },
  dinnerbolus : {
    type : Number 
  } 
});


// Use the above schema to make the User model
var Child = mongoose.model("Child", childSchema);

// Export the model so the server can use it
module.exports = Child;