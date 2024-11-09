import { Router } from 'express';
import CharacterController from './../adapters/CharacterController';

const characterRouter =  Router();

characterRouter.get('/:name', CharacterController.getCharacter);

export default characterRouter;

