
const { render } = require('ejs');
const express =require('express');
const route  = express.Router();
const service = require('../services/render')
const controller = require('../controler/controller')
route.get('/',service.homeRoute)

route.get('/newUser',service.newUser)

route.get('/edit',service.edit)


route.get('/delete',service.delete)

//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports =route;