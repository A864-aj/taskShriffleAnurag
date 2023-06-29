const express=require('express');
const userProfile=express.Router();

const {getUser,search}=require('../Controller/api')

userProfile.get('/allUser',getUser)
userProfile.get('/search',search)

module.exports={userProfile};