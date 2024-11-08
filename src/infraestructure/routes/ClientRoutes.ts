import { Router } from 'express';
import ClientController from '../adapters/ClientController';

const router =  Router();



router.post('/', ClientController.createClient);


router.get('/:clientId', ClientController.getClientById);

export default router;