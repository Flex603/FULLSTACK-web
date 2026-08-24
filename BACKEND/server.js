const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const User = require("./model/User");

const port = 2468;
const app = express();

// Built-in middleware
app.use(express.json());
// app.use(cors());

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

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// nodemon

// // CREATE
// const userCreate = async () => { //   const user = new User({ name: "Lekan" });
//   await user.save();
// };
// userCreate();

// // // READ
// const getUser = async () => {
//   const users = await User.find();
//   console.log(users);
// };
// getUser();

// UPDATE
// const updateUser = async () => {
//   const user = await User.findByIdAndUpdate(
//     ("6a54d76fffed1152bfcb53de", "6a54d756e2da4de6014822b7"),
//     {
//       age: 18,
//       course: "FullStack",
//     },
//   );
// };
// updateUser();

// // // DELETE
// const userDelete = async () => {
//   const user = await User.findByIdAndDelete("6a54d377e8a92e0dcb080de5");
//   console.log(user);
// };
// userDelete();
