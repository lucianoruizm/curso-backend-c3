var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Requerir rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let itemsRouter = require('./routes/items')
// const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
// app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);

module.exports = app;