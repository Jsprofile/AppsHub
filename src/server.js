const app = require('./app')
require('dotenv').config()

app.listen(3333, () => console.log("Server running on 3333"))

