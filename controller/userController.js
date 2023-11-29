import User from "../models/user.js";
import bcrypt from "bcrypt";
import sendEMail from "../utils/sendMail.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "gender", "phone"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confPassword, gender, phone } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password and confirm password are not match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const response = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      gender: gender,
      phone: phone,
    });
    await sendEMail({ id: response.id });
    res.json({ msg: "Register success", response });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Email and Password are incorrect" });
    if (user[0].status != "active") return res.status(400).json({ msg: "Your account is unactivated" });
    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const gender = user[0].gender;
    const phone = user[0].phone;
    const status = user[0].status;
    const accessToken = jwt.sign({ userId, name, email, gender, phone, status }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign({ userId, name, email, gender, phone, status }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    await User.update(
      { token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email and Password are incorrect" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const verifyAccount = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
        status: "pending",
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    await user.update({ status: "active" }, { fields: ["status"] });
    return res.status(200).json({ msg: "User Activated" });
  } catch (error) {
    console.error("Error updating user status:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
