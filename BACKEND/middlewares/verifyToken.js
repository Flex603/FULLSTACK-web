const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(404).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded;
    console.log(decoded)
    next();
  } catch (err) {
    return res.status(401).json("invalid or Expired Token");
  }
} 

const verifyUser =(req, res, next) => {
  try {
    const user = req.user
    if(user.role !== "admin") return res.status(400).json("unauthorized")
    if(user.role === "admin") return next()
  } catch (err) {
    res.status(500).json("Server Error")
  }
}

module.exports = {verifyToken, verifyUser};