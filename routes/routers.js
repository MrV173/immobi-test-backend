import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { Login, Logout, Register, getUserByID, getUsers, verifyAccount } from "../controller/userController.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/user/:id", getUserByID);
router.post("/user", Register);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/token", refreshToken);
router.get("/verify/:id", verifyAccount);

export default router;
