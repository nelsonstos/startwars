import {Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware";
import PersonService from '../services/characterServices'
import { sendResponse } from '../utils/responseUtils';

class CharacterController {

    private static personService = new PersonService();

    static getCharacter = asyncMiddleware(
        async (req: Request, res: Response) => {
            const { name } = req.params;
            if (!name) {
                return sendResponse(res, 400, null, "name parameter is required");
            }

            try {
                const character = await  this.personService.getCharacter(name);

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