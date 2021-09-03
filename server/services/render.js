const axios = require('axios');
const { response } = require('express');

exports.homeRoute =(req,res)=>{
    axios.get('https://crud-c.herokuapp.com/api/users')
   
    .then(function(response){
        res.render('index',{user:response.data})
    })
    .catch(err=>{
        res.send({message:` yes not axios ${err}`})
    })
    
}

exports.newUser =(req,res)=>{
    res.render('newUser')
}

exports.edit = (req,res)=>{
axios.get('https://crud-c.herokuapp.com/api/users',{params:{id:req.query.id}})
.then(function(paramsdata){
    res.render('edit',{users:paramsdata.data})
})
.catch(err =>{
    res.send(err.message)
})
    
}

