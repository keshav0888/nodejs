const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const db = require("./util/database");

db.execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0], result[1]);
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use("/feed", feedRoutes);

app.listen(process.env.PORT || 3001);
