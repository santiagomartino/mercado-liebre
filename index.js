const express= require("express");
const { response } = require("express");
const app= express();

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/register", (req,res) => {
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/views/login.html")
})

app.post("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000, () => {console.log("Servidor escuchando en el puerto 3000")})
