var express = require('express');
var router = express.Router();

var studentcourseDB = require('../db/studentcourseDB');

router.get('/',function(req,resp){
    studentcourseDB.findAll(function(results){
        resp.send(JSON.stringify(results));
    });
});

router.get('/findById',function(req,resp){
    var id = req.query.id;
    studentcourseDB.findById(id,function(results){
        resp.send(JSON.stringify(results));
    });
});

module.exports = router;