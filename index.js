const express = require('express')
const app = express()

const path = require('path')
const userModel = require('./models/users')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("index")
})

app.post('/create', async (req, res)=>{
    let {username, email, password, age} = req.body

    let createUser = await userModel.create({
        username,
        email,
        password,
        age
    })

    res.send(createUser)


})

app.listen(3000)
