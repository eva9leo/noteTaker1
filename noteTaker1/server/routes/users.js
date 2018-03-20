var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../modules/user');
var db = mongoose.connection;

router.get('/',function(req, res){
  User.find(function(err, users){
      if(err){
          throw err;
      }
      res.json(users);
  })
});

router.post("/", function (req, res) {
    var new_user = req.body;
    if(!new_user.username||!new_user.password){

      res.send("username and password is required");
      throw err;
    }
    User.create(new_user, function (err, user) {
        if(err){
            throw err;
        }
        res.json(user);
    })
});

router.get('/user', function(req, res) {
  var username = req.query.username;

  if(!username){
      res.send("Username and Password Required");
  }
  User.findOne({"username": username},"username", function (err, doc) {
      if(err){
        throw err;
      }
      res.json(doc);
  })
});

router.get('/:username', function(req, res) {
    var username = req.params.username;
    var password = req.query.password;
    if(!username){
        res.send("Username and Password Required");
    }
    User.findOne({"username": username, "password":password},"username", function (err, doc) {
        if(err){
            throw err;
        }
        res.json(doc);

    })
});

router.delete('/',function(req, res){
    User.remove({}, function(err){
        if(err){
            throw err;
        }
        res.json({"success": true});
    })
});

module.exports = router;