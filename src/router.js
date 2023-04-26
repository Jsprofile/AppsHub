const express = require('express')
const hubFunction = require('./ExcluiEmpresas')

const router = express.Router()

router.post('/', hubFunction.ExcluiEmpresas)

module.exports = router