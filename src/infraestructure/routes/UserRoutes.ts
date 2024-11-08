
import express from "express";
import UserController from "../adapters/UserController";


const router = express.Router();


router.post("/", UserController.createUser);

export default router;
