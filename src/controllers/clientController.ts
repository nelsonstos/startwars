import { Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware"; 
import ClientService from '../services/clientService';
import { sendResponse } from '../utils/responseUtils';

class ClientController {
    private static clientService = new ClientService();

    static createClient= asyncMiddleware(async (req: Request, res: Response) => {
        const clientData = req.body; 
        const  client = await this.clientService.createClient(clientData);

        return sendResponse(res, 201, client, 'Succcessfully registered Client', 'client');
        
    });

    static getClientById = asyncMiddleware(async (req: Request, res: Response) => {
        const { clientId } = req.params;
        const client = await this.clientService.getClientById(clientId);
        return sendResponse(res, 200, client, 'Client successfully obtained', 'client');
    });

}

export default ClientController;