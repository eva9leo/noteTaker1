var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../modules/user');
var Note = require('../modules/note');

router.get('/', function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    var note = req.query.note;

    if(!username||!note){
        throw err;
    }
    User.findOne({"username":username, "password":password}, null, {sort:{"createAt":1}},function(err, user){
        if(!user){
            res.json([]);

        }else{
            var notes = user.notes;
            res.json(notes);

        }
    })
});

router.post('/', function(req,res){
    var body = req.body;
    var username = req.query.username;
    var password = req.query.password;
    if(!username||!password||!body.content){
        throw err;
    }
    User.findOne({"username":username, "password":password}, function(err, user){
        if(!user){
            res.json(null);
        }else{
            var note = new Note(body);
            note.createAt = Date.now();
            User.update({_id:user._id}, {"$push": {"notes":note}},function (err) {
                if(err){
                    res.json(null);
                }else{
                    res.json(note);
                }
            })
        }
    })
});

router.delete('/', function(req,res){

    var username = req.query.username;
    var password = req.query.password;
    var id = req.query._id;
    if(!username||!id||!password){
        res.json({"success":false});
    }
    User.findOneAndUpdate({"username":username,  "password":password},
        {"$pull":{"notes":{"_id":id}}},{new:true},function (err,doc) {
            if(err){
                res.json({"success":false});
            }
            res.json({"success":true});
        })
});

router.put('/', function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    var note = req.query.note;
    var id = req.query._id;
    if(!username||!note||!id||!password){
        res.json({"success":false});
    }

    User.findOneAndUpdate({"username":username, "password":password, "notes._id":id},
        {"$set":{"records.$.content":note}},function (err) {
        if(err){
            res.json({"success":false});
        }
            res.json({"success":true});
    })
});

module.exports = router;
