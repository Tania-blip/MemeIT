var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', userSchema);
