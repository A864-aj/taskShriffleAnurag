const mysql=require('mysql')

const connection=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'onlinebazar'
});

connection.connect((err)=>{
    if(err){
        console.log(err)

    }else{
        console.log("Connected")
    }
})

module.exports=connection