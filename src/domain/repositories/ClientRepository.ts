
import { Client } from "../entities/Client";

export default interface ClientRepository {
  save(user: Client): Promise<Client>;
  findById(email: string): Promise<Client | null>;
}
