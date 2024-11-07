import ClientModel, { Client } from "../models/ClientModel";
import { ClientRepository } from "../repositories/ClientRepository";

class ClientService {
    
    private clientRepository: ClientRepository;

    constructor() {
        this.clientRepository = new ClientRepository(ClientModel); // Instancia el repositorio
    }

    async createClient(clientData: Client): Promise<Client> {
        console.log("service-client: ", clientData)
        return await this.clientRepository.createClient(clientData);
    }

    async getClientById(id: string): Promise<Client | null> {
        return await this.clientRepository.getClientById(id);
    }

}

export default ClientService;