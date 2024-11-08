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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    constructor(userModel) {
        this.userModel = userModel;
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUserModel = new this.userModel(user);
                const resp = yield newUserModel.save();
                return resp;
            }
            catch (error) {
                console.log("Error creating client: ", error);
                throw new Error("Could not create User");
            }
        });
    }
    findById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.get(userId);
                if (!user) {
                    throw new Error(`User with ID ${userId} not found`);
                }
                return user;
            }
            catch (error) {
                console.error("Error fetching user:", error);
                throw new Error("Could not fetch user");
            }
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
