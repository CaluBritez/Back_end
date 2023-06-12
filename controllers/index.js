function rutaGet(req,res){
    res.status(200).send("Esta es la ruta que hace la peticion GET")
}

function rutaPost(req,res){
    res.status(200).send("Esta es la ruta que hace la peticion POST")
}

function rutaPut(req,res){
    res.status(200).send("Esta es la ruta que hace la peticion PUT")
}

function rutaDelete(req,res){
    res.status(200).send("Esta es la ruta que hace la peticion DELETE")
}

module.exports = {
    rutaGet, rutaPost, rutaPut, rutaDelete
}