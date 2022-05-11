const express = require("express")
const fileupload = require("express-fileupload")
const cors = require("cors")
const bodyParser = require("body-parser")


const app = express()
const port = 3000


app
.use(cors())
.use(fileupload())
.use(express.static("files"))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true}))


app.get('/', (_req, res)=>{
    res.send("Bonjour tout le monde.");

})

// routes
require("./src/routes/filesupload")

app.listen(port,()=>{
    console.log(`server runing successfully on http://localhost:${port}`);
} );

