const express = require("express");
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const logger = require('morgan');
const path = require('path');
require("dotenv").config({ path: "./config.env" });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));


// get driver connection
const dbo = require("./db/conn.js");
 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
  
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

app.listen(port, () => {
  // perform a database connection when server starts
  
  dbo.connectToServer(function (err) {
    if (err) console.error("Err",err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
