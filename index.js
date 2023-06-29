const express=require('express');
const app=express();
const port=5000;
const {userProfile}=require('./Routes/apiroutes');

app.use(express.json());

app.use('/',userProfile);

app.listen(port,()=>{
    console.log("running")
});

