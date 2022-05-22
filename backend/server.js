//Подключаем пакеты
const express = require('express') 
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express() //Создаем приложение
const port = process.env.PORT || 5000 //Выбираем порт, по дефолту - 5000

app.use(cors())
app.use(express.json())

//Подключаем mongoDB
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', ()=> {
    console.log("MongoDB connected")
})

//Router(Навигация)
const mernRouter = require('./routes/mern')
const usersRouter = require('./routes/users')   

app.use('/mern', mernRouter)
app.use('/users', usersRouter)

//Запуска приложения
app.listen(port, ()=> {
    console.log(`Port  ${port}`)
})