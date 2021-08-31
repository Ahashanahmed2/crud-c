//export dependences
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const app = express();
dotenv.config({path:'config.env'})
const connectDB = require('./server/database/connection')
const http = require('http')
//import dependences
const routes = require('./server/routes/router')




const server =http.createServer(app);
//log requests
app.use(morgan('tiny'));

connectDB()


//parse request to bodyparser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/',routes)


server.listen(process.env.PORT,()=>console.log("server is process"))