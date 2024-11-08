"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterUserUseCase_1 = __importDefault(require("../../application/useCases/RegisterUserUseCase"));
const async_middleware_1 = __importDefault(require("../middlewares/async.middleware"));
const UserRepositoryImpl_1 = require("../database/UserRepositoryImpl");
const UserModel_1 = require("../database/UserModel");
const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl(UserModel_1.UserModel);
const registerUserUseCase = new RegisterUserUseCase_1.default(userRepository);
class UserController {
}
_a = UserController;
UserController.createUser = (0, async_middleware_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield registerUserUseCase.saveUser(data);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ "error": "error" });
    }
}));
exports.default = UserController;
