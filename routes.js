const express = require('express')
// const { restart } = require('nodemon')
const nunjucks = require('nunjucks')
const routes = express.Router()
const teachers = require('./teachers')


routes.get('/', function(req,res){
    return res.redirect('/teachers')
})

routes.get('/teachers',function(req,res){
    return res.render('teachers/index')
})

routes.get('/teachers/create',function(req,res){
    return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)

routes.post('/teachers',teachers.post)

routes.put('/teachers', teachers.put) /* 27/08 primeiro passo pro Put*/

routes.delete('/teachers', teachers.delete)


module.exports = routes /*  middleware */