const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');


const server = express();

server.use(express.urlencoded({ extended: true}))/* Habilita o acesso aos dados no req.body */
server.use(express.static('public'));
server.use(routes)//


server.set("view engine","njk")

nunjucks.configure("views",{
    express:server
})

server.get("/", function(req,res){
    return res.render("index")

});

	




server.listen(5000,function(){
    console.log("Server is running horrores ;)");
});  // Usado para mandar mensagem ao terminal