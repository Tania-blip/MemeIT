var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Memes = require('./models/memes');
//Connect to mongoose
mongoose.connect('mongodb://localhost/users');
mongoose.set('strictQuery', true);
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('It works1');
});

//intoarce toate meme-urile
app.get('/memes', function(req, res){
    Memes.getMemes(function(err, memes){
        if(err){
            throw err;
        }
        res.json(memes);
    })
});

//intoarce un meme dupa id
app.get('/memes/:_id', function(req, res){
    Memes.getMemesById(req.params._id, function(err, memes){
        if(err){
            throw err;
        }
        res.json(memes);
    })
});

//creaaza un meme in baza de date
app.post('/memes', function(req, res){
    var memes = req.body;
    Memes.addMemes(memes, function(err, memes){
        if(err){
            throw err;
        }
        res.json(memes);
    });
});

//modifica descriere unui meme dupa id
app.put('/memes/:_id', function(req, res){
    var id = req.params._id;
    var memes = req.body;
    Memes.updateMemes(id, memes, {}, function(err, memes){
        if(err){
            throw err;
        }
        res.json(memes);
    });
});

//sterge un meme dupa id
app.delete('/memes/:_id', function(req, res){
    var id = req.params._id;
    Memes.deleteMemes(id, function(err, memes){
        if(err){
            throw err;
        }
        res.json(memes);
    });
});


app.listen(5000);
console.log('Running on port 5000...');