import serveless from 'serverless-http';
import express, { Request, Response  } from 'express';
import dotenv from 'dotenv';

import DynamooseClient from './clients/dynamooseClient';
import setupSwagger from './docs/swagger';
import productRouter from './routes/product.routes';
import characterRouter from './routes/character.routes';
import filmRouter from './routes/film.routes';
import clientRouter from './routes/client.routes';



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// config Swagger 
setupSwagger(app);

// Inicializar el cliente Dynamoose
DynamooseClient.getClient();

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to API!!')
});

app.use('/products', productRouter);
app.use('/characters', characterRouter);
app.use('/films', filmRouter);
app.use('/clients', clientRouter);


export const handler = serveless(app);