var express = require('express')
var userRouter = express.Router()

userRouter.get('/getUser',function(req,res){
    res.send('user get')
})

module.exports = userRouter