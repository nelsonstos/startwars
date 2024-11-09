import { Request, Response, NextFunction } from 'express';
import { logger } from '../../infraestructure/utils/logger';

// Middleware para manejar errores generales
export const errorHandler = (error: Error, req: Request, res: Response) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  logger.error(`Error en ${req.method} ${req.originalUrl}:`, {
    method: req.method,
    url: req.originalUrl,
    statusCode: statusCode,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });

  res.status(statusCode).json({
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
    },
  });
};

// Middleware para rutas no encontradas (404)
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Ruta no encontrada - ${req.originalUrl}`);
  res.status(404);

  logger.warn(`Ruta no encontrada: ${req.method} ${req.originalUrl}`, {
    method: req.method,
    url: req.originalUrl,
    statusCode: 404,
  });

  next(error); // Pasa el error al siguiente middleware (errorHandler)
};

// Manejo de excepciones no controladas
process.on('uncaughtException', (error) => {
  logger.error('Unhandled exception occurred:', {
    message: error.message,
    stack: error.stack,
  });

  // Opcionalmente reiniciar el proceso si es necesario
  process.exit(1);
});

// Manejo de promesas rechazadas sin capturar
process.on('unhandledRejection', (reason: any) => {
  logger.error('Unhandled Rejection at Promise:', {
    reason: reason instanceof Error ? reason.message : reason,
    stack: reason instanceof Error ? reason.stack : undefined,
  });

  // Opcionalmente reiniciar el proceso si es necesario
  process.exit(1);
});
