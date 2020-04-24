const fs = require('fs')
const data = require('./data.json')
// Create
exports.post = function(req,res){
    const keys = Object.keys(req.body) //obrigar a todos os campos estarem preenchidos
  
    for (key of keys){
        if(req.body[key] == "")
            return res.send("Please, fill in all the fields.")
    } //  Validacao dos dados antes de serem enviados a um banco de dados

    let {avatar_url, name, birth, education,modality,disciplines} = req.body//objeto desestruturado

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length +1)


    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education,
        modality,
        disciplines

    }) // empurra novos dados ao array do json

    fs.writeFile("data.json", JSON.stringify(data,null,4),function(err){
        if (err) return res.send("Failure writing the file. ")

        return res.redirect("/mentors")
    })

    // return res.send(req.body);
}

// Update


// Delete