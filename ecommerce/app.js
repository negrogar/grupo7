var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
var session = require('express-session');
var indexRouter = require('./routes/index');
var prodRouter = require('./routes/prod');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var cookieMiddleware = require('./middlewares/cookieMiddleware');
const ejsLint = require('ejs-lint');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(session({
  secret: 'secreto!!!',
  resave: false,
  saveUninitialized: true,
}));
//app.use(cookieMiddleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prod', prodRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
