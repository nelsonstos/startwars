
import { User } from "../entities/User";

export default interface UserRepository {
  save(user: User): Promise<User>;
  findById(email: string): Promise<User | null>;
}
