import { Router } from 'express';
import FilmController from './../adapters/FilmController';

const router =  Router();

router.get('/:id', FilmController.getFilm);

export default router;
