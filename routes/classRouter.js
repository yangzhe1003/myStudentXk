var express = require('express');
var router = express.Router();

var classDB = require('../db/classDB');

router.get('/',function(req,resp){
    classDB.findAll(function(results){
        resp.send(JSON.stringify(results));
    });
});

router.get('/findById',function(req,resp){
    var id = req.query.id;
    classDB.findById(id,function(results){
        resp.send(JSON.stringify(results));
    });
});

module.exports = router;