const express = require('express')
const hubFunction = require('./PossiveisMesclados')
// const firstPage = require('./')

const router = express.Router()

router.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

router.get('/excEmp', (req, res)=>{
    hubFunction.ExcluiEmpresas
    res.sendFile(__dirname + "/exec.html")
})

module.exports = router