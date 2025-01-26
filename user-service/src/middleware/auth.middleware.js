const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model")

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized!!" })
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById({ _id: decode.user._id })
    if (!user) {
      return res.status(401).json({ message: "Unauhtorized!!" })
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = auth;