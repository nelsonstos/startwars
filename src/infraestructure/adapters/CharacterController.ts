import {Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware";
import { sendResponse } from '../utils/responseUtils';
import StarWarsCharacterUseCase from '../../application/useCases/StarWarsCharactersUseCase';

class CharacterController {

    private static starWarsCharacterUseCase = new StarWarsCharacterUseCase();

    static getCharacter = asyncMiddleware(
        async (req: Request, res: Response) => {
            const { name } = req.params;
            if (!name) {
                return sendResponse(res, 400, null, "name parameter is required");
            }

            try {
                const character = await  this.starWarsCharacterUseCase.getCharacter(name);

                if(!character) {
                    return sendResponse(res, 404, null, 'character not found');
                }
                return sendResponse(res, 200, character, 'Character updated obtained', 'character');

            } catch (error) {
                return sendResponse(res, 500, null, 'An error ocurred while fetching the character data');
            }
        }
    )

}


export default CharacterController;