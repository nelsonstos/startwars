import { Client } from "../../domain/entities/Client";
import ClientModel  from "./ClientModel";
import ClientRepository from "../../domain/repositories/ClientRepository";

export class ClientRepositoryImpl implements ClientRepository {

  private clientModel;

  constructor(clientModel: typeof ClientModel) {
    this.clientModel = clientModel;
  }


  async save(client: Client): Promise<Client> {

    try {
      const newClientModel = new this.clientModel(client);
      const resp = await newClientModel.save();

      return resp as Client;
    } catch (error) {
      console.log("Error creating client: ", error);
      throw new Error("Could not create Client");
    }
    
  }

  async findById(clientId: string): Promise<Client | null> {
    try {
      const client = await this.clientModel.get(clientId);
      if (!client) {
        throw new Error(`Client with ID ${clientId} not found`);
      }
      return client;
    } catch (error) {
      console.error("Error fetching client:", error);
      throw new Error("Could not fetch client");
    }
  }
}
