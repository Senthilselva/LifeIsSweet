// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var CareTakerSchema = new Schema({
  // firstName: a trimmed, required string
  name: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  phone: {
    type: String
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  // lastUpdated: a date type entry
  lastUpdated: { 
    type: Date
  }
});


// Use the above schema to make the User model
var CareTaker = mongoose.model("CareTaker", CareTakerSchema);

// Export the model so the server can use it
module.exports = CareTaker;