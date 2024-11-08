import dynamoose, { Schema } from "dynamoose";
import { User } from "../../domain/entities/User";

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
});

export const UserModel = dynamoose.model<User>("users", userSchema);
