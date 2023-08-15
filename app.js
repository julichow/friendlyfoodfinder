var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors"); 

var restaurantsRouter = require("./routes/restaurants");
var usersRouter = require("./routes/users");

var app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/client/dist")));

app.use(cors()); 
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //not using public folder, using client folder

app.use("/api", restaurantsRouter);
app.use("/users", usersRouter);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});
  
module.exports = app;
