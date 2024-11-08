import serveless from 'serverless-http';
import express, { Request, Response  } from 'express';
import userRoutes from './infraestructure/routes/UserRoutes';
import characterRoutes from './infraestructure/routes/CharacterRoutes';
import DynamooseClient from './infraestructure/Clients/dynamooseClient';

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

export const handler = serveless(app);
