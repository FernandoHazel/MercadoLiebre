const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname +'/public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Views/home.html')
})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/Views/register.html')
})

app.get('/Login', (req, res)=>{
    res.sendFile(__dirname + '/Views/Login.html')
})

app.listen(3000, ()=> { 
    console.log('Servidor corriendo en el puerto 3000');
})