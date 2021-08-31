const mongoose = require('mongoose');

const connectDB = async()=>{
   

       mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })

        .then(()=>console.log("MongoDB connected:${connection.host}"))
    .catch((err)=>console.log(err))
}

module.exports = connectDB;