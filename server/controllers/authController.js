import Users from "../models/userModel.js";
const token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  //validate fileds

  if (!firstName) {
    return res.status(400).send("First Name is required");
  }
  if (!email) {
    return res.status(400).send("Email is required");
  }
  if (!lastName) {
    return res.status(400).send("Last Name is required");
  }
  if (!password) {
    return res.status(400).send("Password is required");
  }
  

  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      next("Email Address already exists");
      return;
    }

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password,
      email,
    });

    // user token
    const token = await user.createJWT();
    const tokenn = await new token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE}/users/${user._id}/verify/${tokenn.token}`;
    await sendEmail({user.email,url,subject:"Verify Email Address"});

    res.status(201).send({
      success: true,
      message: "An Email has been sent to your email address, please verify your email address",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountType: user.accountType,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      next("Please Provide AUser Credentials");
      return;
    }

    // find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      next("Invalid -email or password");
      return;
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      next("Invalid email or password");
      return;
    }

    user.password = undefined;

    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};