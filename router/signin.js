var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'o2'
})


/* create account page */
router.get('/regist', (req, res)=>{
    res.render('regist')
})

router.post('/regist',(req, res)=>{
    var today = new Date()
    var firstname = req.body.name
    var email = req.body.email
    var password = req.body.password
    var created = today
    var modified = today
    var sql = 'INSERT INTO users (first_name, email, password, created, modified) VALUES(?, ?, ?, ?, ?)'
    var sqlArray = [firstname, email, password, created, modified]

    db.query(sql, sqlArray, (err, result)=>{
        if(!err){
            console.log(result)
            res.redirect('/login')
        }else{
            console.log(err)
        }
    })
})

/* log in page */
router.get('/login', (req, res)=>{
    res.render('log_in')
})

module.exports = router