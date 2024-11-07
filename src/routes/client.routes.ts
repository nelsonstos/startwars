import { Router } from 'express';
import ClientController from '../controllers/clientController';

const router =  Router();



router.post('/', ClientController.createClient);


router.get('/:clientId', ClientController.getClientById);

export default router;