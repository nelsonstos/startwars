import { Router } from 'express';
import FilmController from './../adapters/FilmController';

const filmRouter =  Router();

filmRouter.get('/:id', FilmController.getFilm);

export default filmRouter;
