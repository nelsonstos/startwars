import serveless from 'serverless-http';
import express, { Request, Response  } from 'express';
import DynamooseClient from './infraestructure/Clients/dynamooseClient';
import userRoutes from './infraestructure/routes/UserRoutes';
import characterRoutes from './infraestructure/routes/CharacterRoutes';
import filmRoutes from './infraestructure/routes/FilmRoutes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Inicializar el cliente Dynamoose
DynamooseClient.getClient();

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to API!!')
});

app.use('/users', userRoutes);
app.use('/characters', characterRoutes);
app.use('films/', filmRoutes);

export const handler = serveless(app);
