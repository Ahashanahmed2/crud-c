const Userdb = require('../model/model');


//create new user
exports.create = (req,res)=>{
//validate request

if(!req.body){
    res.status(400).send({massage:"Content can not be empty"})
    return;
}
const user = new Userdb ({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

//save user in the database
user
.save(user)
.then(data=>{
    res.redirect('/')
})
.catch(err=>{
    res.status(500).send({message:err.message || "Some error occurred while create Function"})
})
}

//all users
exports.find = (req,res)=>{
    if(req.query.id){
const id = req.query.id;
Userdb.findById(id)
.then(data=>{
    if(!data){
        res.status(404).send({message: `not Data this ${id}`})
    }else{res.send(data)

    }
})
.catch((err)=>{
    res.send({message:`not findById : ${err}`})
})
    }else{
        Userdb.find()
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "find fale"})
        })
    }

}

exports.update =(req,res)=>{
if(!req.body){
    return res
    .status(400)
    .send({message:"Data update can not be empty"})
}
     const id = req.params.id;
     
Userdb.findByIdAndUpdate(id,req.body)
.then(data=>{
    if(!data){
        res.status(404).send({message:`Connot Update user with ${id}.Mayby user not`})
    }
    else{
        res.send(data)
    }
})
.catch(err=>{
    res.status(500).send({message:'Error Update user information'})
})
}

exports.delete = (req,res)=>{
    const id = req.params.id
Userdb.findByIdAndDelete(id)
.then(
    res.send({message:`delete messege this ${id}`})
)
.catch(err=>{
    res.status(500).send({message:"rownd id  and not delete"})
})
}