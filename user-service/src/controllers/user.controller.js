const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const blacklisttokenModel = require("../model/backlist.model")

module.exports.register = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user is already exist!" });
    }
    const hash = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password: hash });
    await newUser.save();

    // jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.send({ data: newUser, message: "Register successfully." })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      res.status(400).json({ message: "Invalid email and password." })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email and password." })
    }
    // Password delete from object
    delete user._doc.password;
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1h" })
    res.send({ token, user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports.logout = async function (req, res) {
  try {
    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await blacklisttokenModel.create({ token });
    res.send({ message: "user logout successfully." })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}