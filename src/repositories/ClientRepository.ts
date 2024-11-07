import ClientModel, { Client } from "../models/ClientModel";

export class ClientRepository {
  private clientModel;

  // Inyección de dependencias a través del constructor
  constructor(clientModel: typeof ClientModel) {
    this.clientModel = clientModel;
  }

  // Crear un nuevo Client
  async createClient(clientData: Client): Promise<Client> {
    try {
      const newclientModel = new this.clientModel(clientData);
      const result = await newclientModel.save();
      return result as Client;
    } catch (error) {
      console.error("Error creating client:", error);
      throw new Error("Could not create client");
    }
  }

  async getClientById(clientId: string): Promise<Client> {
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