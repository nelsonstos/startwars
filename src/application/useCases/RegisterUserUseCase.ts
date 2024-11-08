import UserRepository  from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { UserModel } from "../../infraestructure/database/UserModel";
import { RegisterUserDTO } from "../dtos/RegisterUserDTO";

class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async saveUser(user: RegisterUserDTO): Promise<User> {

    const dataUser = new  UserModel ({
        userId: user.userId,
        name: user.name,
        email: user.email
    })

    console.log("user: ", dataUser)
    
    return await this.userRepository.save(dataUser);
  }

  async getUserById(id: string): Promise<User | null>{
    return await this.userRepository.findById(id);
  }
}

export default RegisterUserUseCase;
