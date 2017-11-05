//1.引入模块
var pool = require('./pool');

if(!pool){
    return;
}

//2.编写查询数据库函数
function findAll(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_student';
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results); 
                }
            });
            connection.release();
        }
    });
};

function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_student where id = ?';
            connection.query(sql,[id],function(err,results){
                if(err){
                    throw err;
                }else{
                    console.log(results);
                    handler.call(this,results); 
                }
            });
            connection.release();
        }
    });
};

function deleteById(ids,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'delete from xk_student where id in ('+ids.join()+')';
            connection.query(sql,function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results); 
                }
            });
            connection.release();
        }
    });
};

function save(name,gender,birth,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'insert into xk_student(name,gender,birth) values(?,?,?)';
            connection.query(sql,[name,gender,birth],function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results); 
                }
            });
            connection.release();
        }
    });
};

function alt(id,name,gender,birth,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'update xk_student set name=?,gender=?,birth=? where id=?';
            connection.query(sql,[name,gender,birth,id],function(err,results){
                if(err){
                    throw err;
                }else{
                    handler.call(this,results); 
                }
            });
            connection.release();
        }
    });
};

module.exports = {
    findAll : findAll,
    findById : findById,
    deleteById : deleteById,
    save : save,
    alt : alt
};