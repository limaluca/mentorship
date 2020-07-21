const fs = require('fs')
const data = require('./data.json')
const {age,graduation, date} = require('./utils')
const { render } = require('nunjucks')
// Função para o Create
exports.post = function(req,res){

    const keys = Object.keys(req.body) /* validando os dados */

    for (key of keys) {

        if (req.body[key] == ""){
            return res.send("Please, fill the "+key+" field.") /* mensagem de erro se invalidado */
        }
    }

    let {avatar_url, name, birth, graduation, modality,disciplines } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        avatar_url,
        name,
        birth,
        graduation,
        modality,
        disciplines,
        id,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data,null, 2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/teachers")
    })

    // return res.send(req.body)

}


// Função para o Show
exports.show = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found")



    const teacher = {
        
        ...foundTeacher,
        age: age(foundTeacher.birth),
        disciplines: foundTeacher.disciplines.split(","),
        graduation: graduation(foundTeacher.graduation),
        created_at: new Intl.DateTimeFormat("eng-US").format(foundTeacher.created_at),

        
        
    }
    return res.render('teachers/show', {teacher})
    
}


exports.edit = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found")


    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)

    }

    return res.render("teachers/edit",{teacher})

}