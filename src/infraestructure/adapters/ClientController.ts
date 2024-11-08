import { Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware"; 
import { sendResponse } from '../utils/responseUtils';
import ClientUseCase from '../../application/useCases/ClientUseCase';
import { ClientRepositoryImpl } from '../database/ClientRepositoryImpl';
import ClientModel from '../database/ClientModel';
import { ClientDTO } from '../../application/dtos/ClientDTO';

const clientRepository = new ClientRepositoryImpl(ClientModel);
const clientUseCase = new ClientUseCase(clientRepository);

class ClientController {

    static createClient= asyncMiddleware(async (req: Request, res: Response) => {
        const data: ClientDTO = req.body; 
        const  client = await clientUseCase.createClient(data);

        return sendResponse(res, 201, client, 'Succcessfully registered Client', 'client');
        
    });

    static getClientById = asyncMiddleware(async (req: Request, res: Response) => {
        const { clientId } = req.params;
        const client = await clientUseCase.getClientById(clientId);
        return sendResponse(res, 200, client, 'Client successfully obtained', 'client');
    });

}

export default ClientController;