// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a user schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  city: [{
      cityId: Number,
      cityName : String,
      countryId :Number,
  }],
  created_at: Date,
  updated_at: Date
});

// we need to create a model using it
var Users = mongoose.model('Users', userSchema);

// make this available to our users in our Node applications
module.exports = Users;