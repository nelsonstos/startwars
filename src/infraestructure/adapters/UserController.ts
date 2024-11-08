
import RegisterUserUseCase  from "../../application/useCases/RegisterUserUseCase";
import { RegisterUserDTO } from "../../application/dtos/RegisterUserDTO";
import { Request, Response } from "express";
import asyncMiddleware from "../middlewares/async.middleware";
import { UserRepositoryImpl } from "../database/UserRepositoryImpl";
import { UserModel } from "../database/UserModel";

const userRepository = new UserRepositoryImpl(UserModel);
const registerUserUseCase = new RegisterUserUseCase(userRepository);
class UserController {
    
  static createUser= asyncMiddleware(
    async (req: Request, res: Response) => {
        const data: RegisterUserDTO = req.body;

        try {
            const user = await registerUserUseCase.saveUser(data);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ "error": "error" });
        }
    
    });
}

export default UserController;
