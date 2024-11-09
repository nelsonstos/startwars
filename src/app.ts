import serveless from 'serverless-http';
import express, { Request, Response, Application  } from 'express';
import DynamooseClient from './infraestructure/Clients/dynamooseClient';
import userRoutes from './infraestructure/routes/UserRoutes';
import characterRouter from './infraestructure/routes/CharacterRoutes';
import filmRouter from './infraestructure/routes/FilmRoutes';
import clientRouter from './infraestructure/routes/ClientRoutes';
import { notFoundHandler } from './infraestructure/middlewares/errorHandler';


const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Inicializar el cliente Dynamoose
DynamooseClient.getClient();



//app.use('/users', userRoutes);
app.use('/characters', characterRouter);
app.use('/films', filmRouter);
app.use('/clients', clientRouter);

app.use(notFoundHandler);


export const handler = serveless(app);
export default app;
