import { Item } from "dynamoose/dist/Item";

export interface User extends Item {
    userId: string;
    name: string;
    email: string;
}
  