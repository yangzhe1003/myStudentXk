var pool = require('./pool');
if(!pool){
    return;
}

function findAll(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_course';
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
            var sql = 'select * from xk_course where id = ?';
            connection.query(sql,[id],function(err,results){
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
    findById : findById
};