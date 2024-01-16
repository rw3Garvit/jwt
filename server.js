require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const app = express();

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies
app.use(cookieParser());

//ejs
app.set("view engine", "ejs");

//routes
app.use("/v1", routes);

//pages
app.get("/", (req, res) => {
  res.render("./index");
});

app.get("/login", (req, res) => {
  res.render("./login");
});

app.get("/register", (req, res) => {
  res.render("./register");
});

//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started scuucess on 3001");
});
