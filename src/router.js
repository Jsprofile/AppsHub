const express = require('express')
const hubFunction = require('./PossiveisMesclados')

const router = express.Router()

router.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

router.get('/excEmp', function(req, res){
    hubFunction.PossiveisMesclados()
    res.send("/exec.html")
})

module.exports = router