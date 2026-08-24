require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const PORT = 2020;
const cors = require("cors");
const User = require("./model/User")
const app = express();


// built-In middleware
app.use(express.json());
app.use(cors());
// // Custom middleware for logging
// app.use((req, res, next) => {
//     console.log(`${req.method} request for ${req.url}`);
//     next(); // move to next handler
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/kazeem", (req, res) => {
//   res.send("This is Kazeem's page");
// });

mongoose
  .connect("mongodb://localhost:27017/myFirstDB")
  .then((result) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(err.message);
  });

const userRoute = require("./routes/userRoutes");
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});


// mongodb+srv://owolewaadeola9_db_user>:Uk965xEHcVxdoOme@cluster0.nuausiw.mongodb.net/
