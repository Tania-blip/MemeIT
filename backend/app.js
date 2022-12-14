var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

app.use(bodyParser.json());

Memes = require('./models/memes');
User = require('./models/user');

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
app.post(
    '/user',
    body('email').isEmail()
    .withMessage('the field must be a valid email'),
    body('password').isLength({min:8 ,max:32})
    .withMessage('the field is not between 8 and 32 characters'),
    body('username').isLength({min:8 ,max:32})
    .withMessage('the field is not between 8 and 32 characters'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        var user = req.body;
            User.addUser(user, function(err, user){
                if(err){
                    throw err;
                }
                res.json(user);
            });
        },
    
);
//input validation for memes 
app.post(
    '/memes',
    body('description').isLength({max: 2500})
    .withMessage('the field is not between 0 and 2500 characters'),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        var memes = req.body;
        Memes.addMemes(memes, function(err, memes){
            if(err){
                throw err;
            }
            res.json(memes);
        });
    },
)


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

//afiseaza toti userii
app.get('/user', function(req, res){
    User.getUser(function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});

//input validation for users 
app.post(
    '/user',
    body('email').isEmail()
    .withMessage('the field must be a valid email'),
    body('password').isLength({min:8 ,max:32})
    .withMessage('the field is not between 8 and 32 characters'),
    body('username').isLength({min:8 ,max:32})
    .withMessage('the field is not between 8 and 32 characters'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        var user = req.body;
            User.addUser(user, function(err, user){
                if(err){
                    throw err;
                }
                res.json(user);
            });
        },
    
);

app.listen(5000);
console.log('Running on port 5000...');