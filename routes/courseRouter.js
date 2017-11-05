var express = require('express');
var router = express.Router();

var courseDB = require('../db/courseDB');

router.get('/',function(req,resp){
    courseDB.findAll(function(results){
        resp.send(JSON.stringify(results));
    });
});

router.get('/findById',function(req,resp){
    var id = req.query.id;
    courseDB.findById(id,function(results){
        resp.send(JSON.stringify(results));
    });
});

module.exports = router;