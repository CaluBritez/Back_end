const routes = require("./routes/index.js")

const express = require("express");

const morgan = require("morgan")

const cors = require("cors")

const helmet = require("helmet")

const app = express()

require("dotenv").config()
const port = process.env.PORT || 3000

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/", routes)



app.listen(port, ()=>{

    console.log(`Servidor escuchando en el puerto ${port}`);
})
