const User = require("../model/User");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// async and try
const createUser = async (req, res) => {
  console.log("ran")
  try {
    const {name, password, email } = req.body
    if (!email) return res.status(404).json("Email required");
    if (!password) return res.status(404).json("Password required");
    console.log(email, password)

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ name, password: hashedPassword, email });
    console.log(email, password)
    await user.save();

    res.status(200).json("User Account Created");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(404).json("Email is required");
    if (!password) return res.status(404).json("password is required");

    const user = await User.findOne({ email });
    console.log("user:", user);

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) return res.status(400).json("password Incorrect");

    console.log("user: ", user);
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_KEY,
      {
        expiresIn: "30m",
      },
    );
    res.status(200).json(token);
  } catch (err) {
    console.log(err.message);
    res.status(500).json("Server Error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(400).json("Users Not There");

    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) return res.status(404).json("User Not Found");

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, email, role } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, password, email, role });
    console.log(user.role)

    res.status(200).json("User updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(200).json("User Successfully Deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser, loginUser };
