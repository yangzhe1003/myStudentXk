//1.引入模块
var express = require('express');
var router = express.Router();

var studentDB = require('../db/studentDB');

//2.编写路由接口
router.get('/',function(req,resp){
    studentDB.findAll(function(results){
        resp.json(results);
    });
});

router.get('/findById',function(req,resp){
    var id = req.query.id;
    studentDB.findById(id,function(results){
        resp.json(results);
    });
});

router.post('/deleteById',function(req,resp){
    var ids = req.body;
    studentDB.deleteById(ids,function(results){});
});

router.get('/save',function(req,resp){
    var name = req.query.name;
    var gender = req.query.gender;
    var birth = req.query.birth;
    studentDB.save(name,gender,birth,function(results){});
});

router.get('/alt',function(req,resp){
    var id = req.query.id;
    var name = req.query.name;
    var gender = req.query.gender;
    var birth = req.query.birth;
    studentDB.alt(id,name,gender,birth,function(results){});
});

//3.暴露接口
module.exports = router;