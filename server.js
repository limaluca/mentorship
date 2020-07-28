const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express() 
const methodOverride = require('method-override') //middleware do override


server.use(express.urlencoded({ extended: true })) //midware para receber os dados no backend


server.use(express.static("public")) //observando a pasta public
server.use(methodOverride('_method')) //deve vir antes do routes para interceptar o routes
server.use(routes)

server.set("view engine","njk")

nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache: true
})

server.listen(5000,function(){
    console.log("O servidor ta rodando por enqto.....")
})


