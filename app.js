const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const socket_io = require("socket.io");
const io = socket_io();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dbConnect = require("./config/dbConnect").dbConnect;
require("dotenv").config();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
dbConnect();
// const changeStream =

// changeStream.on("change", (change) => {
//   console.log(change); // You could parse out the needed info and send only that data.
//   io.emit("changeData", change);
// });

// io.on("connection", function () {
//   console.log("connected");
// });

app.get("/test", (req, res) => {
  console.log(process.env.DB_PASS);
});
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
