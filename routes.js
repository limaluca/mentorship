const express = require('express');
const routes = express.Router();

routes.get('/',function(req,res){
    return res.redirect("mentors")
})

routes.get("/mentors",function(req,res){
    return res.render("mentors/index")
})

routes.get("/students",function(req,res){
    return res.render("students")
})

module.exports = routes