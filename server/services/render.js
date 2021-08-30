const axios = require('axios');

exports.homeRoute =(req,res)=>{
    axios.get('http://localhost:3000/api/users')
   
    .then(function(response){
        console.log(response);
        res.render('index',{user:response.data})
    })
    .catch(err=>{
        res.send({message:`not axios ${err}`})
    })
    
}

exports.newUser =(req,res)=>{
    res.render('newUser')
}

exports.edit = (req,res)=>{
    res.render('edit')
}

exports.delete =(req,res)=>{
    res.render('delete')
}