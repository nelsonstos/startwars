import { Router } from 'express';
import FilmController from '../controllers/filmController';

const router =  Router();

/**
 * @swagger
 * /api/films/{id}:
 *   get:
 *     summary: Get a film by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The film ID
 *     responses:
 *       200:
 *         description: A film object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 film:
 *                   type: object
 *                   properties:
 *                      titulo:
 *                        type: string
 *                      episodioId:
 *                        type: string
 *                      introduccion:
 *                        type: string
 */

router.get('/:id', FilmController.getFilm);

export default router;
