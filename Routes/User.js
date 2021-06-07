import express from "express";
import { createUser } from "../controllers/UserController.js";

const router = express.Router();

router.post("/users/register", createUser);

export default router;