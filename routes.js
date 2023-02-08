var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
    res.send('route get')
})

module.exports = router