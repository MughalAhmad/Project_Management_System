var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const cors=require("cors")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(
  {credentials:true,
  origin:true}
));

const authRouter =require("./routes/authRouter");
const userRouter =require("./routes/userRouter");
const projectRouter = require("./routes/projectRouter");
const taskRouter = require("./routes/taskRouter");
const requestRouter = require("./routes/requestRouter");
const teamRouter = require("./routes/teamRouter");




app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/project",projectRouter);
app.use("/task",taskRouter);
app.use("/request",requestRouter);
app.use("/team",teamRouter);






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
