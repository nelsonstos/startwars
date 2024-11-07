import { Router } from 'express';
import CharacterController from '../controllers/characterController';

const router =  Router();

router.get('/:name', CharacterController.getCharacter);

export default router;

