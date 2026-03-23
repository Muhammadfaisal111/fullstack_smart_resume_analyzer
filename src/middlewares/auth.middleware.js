const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blackListModel");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token });
  if (isTokenBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = authMiddleware;
