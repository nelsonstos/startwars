import  UserRepository  from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { UserModel } from "./UserModel";

export class UserRepositoryImpl implements UserRepository {

  private userModel;

  constructor(userModel: typeof UserModel) {
    this.userModel = userModel;
  }


  async save(user: User): Promise<User> {

    try {
      const newUserModel = new this.userModel(user);
      const resp = await newUserModel.save();

      return resp as User;
    } catch (error) {
      console.log("Error creating client: ", error);
      throw new Error("Could not create User");
    }
    
  }

  async findById(userId: string): Promise<User | null> {
    try {
      const user = await this.userModel.get(userId);
      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Could not fetch user");
    }
  }
}
