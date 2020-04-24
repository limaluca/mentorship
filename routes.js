const express = require('express');
const routes = express.Router();
const teachers = require('./teachers')
routes.get('/',function(req,res){
    return res.redirect("mentors")
})

routes.get("/mentors",function(req,res){
    return res.render("mentors/index")
})

routes.get("/mentors/creation",function(req,res){
    return res.render("mentors/creation")
})

routes.post("/mentors",teachers.post)

routes.get("/students",function(req,res){
    return res.render("students")
})

module.exports = routes