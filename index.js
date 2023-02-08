var express = require('express')
var app = express()
var router = require('./routes')
var user = require('./userRoutes')

var host = '127.0.0.1'
var port = 3000

app.use(logger)

app.get('/', auth,function (req, res) {
    console.log('get function');
    // console.log('get query..',req.query); // http://localhost:3000/?id=1
    res.send('get')
})

app.get('/:id', auth, function (req, res) {
    // console.log('get query',req.query); // http://localhost:3000/?id=1
    // console.log('get params',req.params); // http://localhost:3000/1
    res.send(`get ${req.params.id}`)
})

app.post('/', function (req, res) {
    console.log('post', req.query);
    res.send('post')
})

app.put('/', function (req, res) {
    res.send('put')
})

app.delete('/', function (req, res) {
    res.send('delete')
})

app.all('/', function (req, res) {
    res.send('all')
})


app.use('/router', router)
app.use('/user', user)

// app.use(logger)

// it should be in the last
app.get('*', function (req, res) {
    res.send('not a valid url')
})

function logger(req, res, next) {
    console.log('logger');
    next()
}

function auth(req, res, next) {
    console.log('auth')
    if (req.query.isAdmin === "true") {
        next()
    } else {
        res.send("Unauthorized user")
    }
}

// app.listen(3000)
var server = app.listen(port,host, function (req,res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server started at http://${host}:${port}/`);
});  