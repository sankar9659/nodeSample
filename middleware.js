const express = require('express');

const app = express();
const router = express.Router()

//--------------------------Application Middleware---------------------------------

// const LoggerMiddleware =(req ,res, next) =>{
// let access =false;
// if(access){
//     next();
// }else{
//     res.send("UNAUTHORIZED USER")
// }
// }
// app.use(LoggerMiddleware);

// //application Middleware

// app.get('/users', (req,res)=>{
//     res.json({
//         'status':true
//     })
// })


// app.listen(3000, (req,res)=>{
//     console.log('server running');
// })


//--------------------------------Router Middleware-----------------------------

router.use((req,res,next)=>{
    console.log("Time:",new Date())
    next()
})

router.get("/user/:id", (req,res,next)=>{
    console.log("request url: ", req.originalUrl);
    next()
},(req,res,next)=>{
    console.log('req type: ',req.method);
    next()
},(req,res)=>{
    res.json({
        status:true,
        id:req.params.id
    })
})

app.use('/',router)

app.listen(3000,(req,res)=>{
    console.log('server running on 3000')
})




//--------------------------------------------Templating------------------------------

