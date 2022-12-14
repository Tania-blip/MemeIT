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

//Get User
module.exports.getUser = function(callback, limit){
    User.find(callback).limit(limit);
}

//Add user(for register)
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}




