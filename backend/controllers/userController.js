const User = require("../models/userModal.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, industry } = req.body;

    if (!name || !email || !password || !industry) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Validate EMAIL----------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if user already exists -----------------
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //  Validate PASS -----------------
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Password Too Short.",
      });
    }

    // Hash password  -------------------
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS) || 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      industry,
    });

    await newUser.save();

    // 7️ Generate JWT Token---------
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    //  Sending JSON response with token----------------
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        industry: newUser.industry,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET----------------------------

exports.getUserByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await User.findOne({ email: userEmail }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
