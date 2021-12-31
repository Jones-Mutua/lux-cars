const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
fullname: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "Username should be unique"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  nationalId: {
    type: String,
    
    required: true,
  },

  // acceptTerms : {
  //   type : Boolean,
  //   default: false,
  //   required: true,
  // },
 

  role: {
    type: String,
    enum: ["client", 'admin'],
    default: 'client'
  },
  active: {
    type: Boolean,
    default: true,
  }
});

module.exports = model("User", UserSchema);