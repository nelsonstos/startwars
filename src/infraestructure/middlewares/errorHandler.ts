import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infraestructure/utils/logger';

// Middleware para manejar errores
export const errorHandler = (error: Error, req: Request, res: Response) => {
  // Logueo del error
  logger.error(`An error occurred in ${req.method} ${req.originalUrl}:`, {
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });

  // Respuesta estándar para errores
  return res.status(500).json({
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
    },
  });
};

// Manejo de excepciones no capturadas
process.on('uncaughtException', (error) => {
  logger.error('Unhandled exception occurred:', {
    message: error.message,
    stack: error.stack,
  });

  // Opcional: Finalizar el proceso si la excepción es crítica
  process.exit(1); // Asegúrate de que este comportamiento sea el que deseas
});
