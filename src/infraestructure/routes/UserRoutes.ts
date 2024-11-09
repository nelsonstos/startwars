
import express from "express";
import UserController from "../adapters/UserController";


const routerUser = express.Router();


routerUser.post("/", UserController.createUser);

export default routerUser;
