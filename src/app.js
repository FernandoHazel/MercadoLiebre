const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); 

//*****Express******/
const app = express();


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); //necesarios para recibir información por POST o PUT y guardarla
app.use(express.json()); //necesarios para recibir información por POST o PUT y guardarla
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));

//*********Setting engine*********/
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

//*****Routers********
const mainRouter = require('./routes/main')

app.use('/', mainRouter)

const port = 3000

app.listen(process.env.PORT || port, ()=> { 
    console.log('Servidor corriendo en el puerto ' + port);
})

module.exports = app;