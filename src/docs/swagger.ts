import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Opciones de configuración para Swagger
const options = {
    definition: {
        openapi: '3.0.0', // Especifica la versión de OpenAPI
        info: {
            title: 'API Documentation', // Título de la API
            version: '1.0.0', // Versión de la API
            description: 'API Documentation for our Serverless App', // Descripción de la API
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL del servidor
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas donde se encuentran las anotaciones
};

// Generar la especificación Swagger
const specs = swaggerJsDoc(options);

const setupSwagger = (app: Express) => {
    // Servir la documentación Swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;
