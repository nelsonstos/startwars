import { Router } from 'express';
import CharacterController from './../adapters/CharacterController';

const characterRouter =  Router();

/**
 * @openapi
 * /api/characters/{name}:
 *   get:
 *     summary: Obtiene un personaje de Star Wars por su nombre
 *     parameters:
 *       - name:
 *         in: path
 *         description: Nombre del personaje
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información del personaje obtenida exitosamente
 *       400:
 *         description: Parámetro 'name' es requerido
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error interno del servidor
 */
characterRouter.get('/:name', CharacterController.getCharacter);

export default characterRouter;

