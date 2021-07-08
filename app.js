const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname +'/public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html')
})

app.get('/Login', (req, res)=>{
    res.sendFile(__dirname + '/views/Login.html')
})

app.listen(process.env.PORT || 3000, ()=> { 
    console.log('Servidor corriendo');
})