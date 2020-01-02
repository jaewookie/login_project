var express = require('express')
var app = express()
var path = require('path')
require('ejs')
require('dotenv').config()
var bodyParser = require('body-parser')
var logRouter = require('./router/signin.js')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', logRouter)

var port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is starting at http://localhost:${port}`)
})