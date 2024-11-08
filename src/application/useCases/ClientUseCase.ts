import ClientModel from "../../infraestructure/database/ClientModel";
import ClientRepository  from "../../domain/repositories/ClientRepository";
import { ClientDTO } from "../dtos/ClientDTO";
import { Client } from "../../domain/entities/Client";

class ClientUseCase {
    
    constructor( private clientRepository: ClientRepository) {}
        
    async createClient(clientData: ClientDTO): Promise<Client> {
        console.log("service-client: ", clientData)
        const data = new ClientModel({
            clientId:  clientData.clientId,
            name: clientData.name,
            lastName: clientData.lastName,
            email: clientData.email,
            phone: clientData.phone
        })
        return await this.clientRepository.save(data);
    }

    async getClientById(id: string): Promise<Client | null> {
        return await this.clientRepository.findById(id);
    }

}

export default ClientUseCase;