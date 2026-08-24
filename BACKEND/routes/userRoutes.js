const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
} = require("../controllers/userController");
const {verifyToken, verifyUser} = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/", verifyToken, verifyUser, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
