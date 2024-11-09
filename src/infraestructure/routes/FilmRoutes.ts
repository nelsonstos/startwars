import { Router } from 'express';
import FilmController from './../adapters/FilmController';

const filmRouter =  Router();

/**
 * @openapi
 * /films/{id}:
 *   get:
 *     summary: Get a Star Wars film by ID
 *     description: Returns a Star Wars film based on the provided film ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the film
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         message: Film successfully obtained
 *         status: 200
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 character:
 *                   type: object
 *                   properties:
 *                      nombre:
 *                          type: string
 *                          exameple:"Pepe"
 *                          example: "A New Hope"
 *                      altura:
 *                          type: string
 *                          example: '180'
 *                      masa:
 *                          type: string
 *                          example: '49'
 *                      
 *       400:
 *         description: ID parameter is required
 *       404:
 *         description: Film not found
 *       500:
 *         description: An error occurred while updating the film
 */
filmRouter.get('/:id', FilmController.getFilm);

export default filmRouter;
