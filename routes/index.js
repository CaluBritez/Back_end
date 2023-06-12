const { Router } = require("express")

const {rutaGet, rutaPost, rutaPut, rutaDelete} = require("../controllers/index")

const routes = Router()

routes.get("/get",rutaGet)

routes.post("/post",rutaPost)

routes.put("/put",rutaPut)

routes.delete("/delete",rutaDelete)

module.exports = routes