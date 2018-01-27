const express = require("express")
const axios = require("axios")

const app = express()
const baseURL = "https://api.github.com"
const api = axios.create({ baseURL })

//Cria rota no Express para atender em /seguidores/:username
app.get("/seguidores/:username", (req, res) => {
  //Axios
    api.get(`/users/${req.params.username}/followers`)
    .then(ret => res.send(ret.data))
    .catch(err => res.status(500).send(err.response.data))
})

app.listen(3000)
console.log("server online!")


 