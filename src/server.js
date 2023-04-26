const app = require('./app')
const func = require('./PossiveisMesclados')
require('dotenv').config()

// app.listen(3333, () => console.log("Server running on 3333"))
app.listen(3333, func.ExcluiEmpresas)

