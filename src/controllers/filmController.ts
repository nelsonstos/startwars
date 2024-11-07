import {Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware";
import FilmService from '../services/filmService';
import { sendResponse } from '../utils/responseUtils';


class FilmController {

    private static filmService = new FilmService();

    static getFilm = asyncMiddleware(
        async (req: Request, res: Response) => {
            const { id } = req.params;
            if (!id) {
                return sendResponse(res, 400, null, "id parameter is required");
            }

            try {
                const film = await  this.filmService.getFilm(parseInt(id));

                if(!film) {
                    return sendResponse(res, 404, null, 'Film not found');
                }
                return sendResponse(res, 200, film, 'Film successfully obtained', 'film');

            } catch (error) {
                console.error(error);
                return sendResponse(res, 500, null, 'An error occurred while updating the film');
            }
        }
    )

}

export default FilmController;