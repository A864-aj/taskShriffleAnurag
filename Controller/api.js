const connection=require("../model/dbConnect");

const getUser=async(req,res)=>{
    let sql='SELECT user_name FROM admin_user';
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}

const search=async(req,res)=>{
    // let sql='SELECT user_name FROM admin_user where user_name  %LIKE%';
let name=req.query.user_name
let sql2=`SELECT * FROM admin_user where user_name LIKE '%${name}%'`
    let data=[req.query.user_name];

    connection.query(sql2,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
}

module.exports={getUser,search}