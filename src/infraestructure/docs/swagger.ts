import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Star Wars',
      version: '1.0.0',
      description: 'Una API para obtener información de personajes y películas de Star Wars',
    },
    servers: [
      {
        url: 'http://localhost:3000', // La URL de tu servidor
      },
    ],
  },
  // Path donde se encuentran los comentarios de Swagger
  apis: ['./src/infraestructure/routes/*.ts'], // O la ruta a donde estén tus controladores y rutas
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Ruta para ver la interfaz de Swagger
};
