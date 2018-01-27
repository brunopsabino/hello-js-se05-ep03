const express = require("express")
const axios = require("axios")

const app = express()
const baseURL = "https://thecatapi.com"
const api = axios.create({ baseURL })

const params = {format: 'html'}

//Cria rota no Express para atender em /seguidores/:username
app.get("/cat", (req, res) => {
    //Axios
      api.get('/api/images/get', {params})
      .then(ret => res.send(ret.data))
      .catch(err => res.status(500).send(err.response.data))
  })
  
  app.listen(3000, _=> console.log("cat-server online!"))
  
  