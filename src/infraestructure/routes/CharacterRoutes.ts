import { Router } from 'express';
import CharacterController from './../adapters/CharacterController';

const router =  Router();

router.get('/:name', CharacterController.getCharacter);

export default router;

