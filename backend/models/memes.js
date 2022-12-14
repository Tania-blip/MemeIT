var mongoose = require('mongoose');

//memes schema
var memesSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    }
})

var Memes = module.exports = mongoose.model('Memes', memesSchema);

//Get Memes
module.exports.getMemes = function(callback, limit){
    Memes.find(callback).limit(limit);
}

//Get Memes by id
module.exports.getMemesById = function(id, callback){
    Memes.findById(id, callback);
}

//Add a meme
module.exports.addMemes = function(memes, callback){
    Memes.create(memes, callback);
}

//Update a meme
module.exports.updateMemes = function(id, memes, options, callback){
    var query = { _id: id};
    var update = {
        description: memes.description
    }
    Memes.findOneAndUpdate(query, update, options, callback);
}

//Delete Meme By Id
module.exports.deleteMemes = function(id, callback){
    var query = { _id: id};
    Memes.remove(query, callback);
}