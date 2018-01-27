const axios = require("axios")

const baseURL = "https://api.github.com"

const api = axios.create({ baseURL })

const params = { username : "brunopsabino" }

api.get("/users/:username/followers", { params }).then(ret => console.log(ret.data))