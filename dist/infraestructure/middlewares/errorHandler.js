"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../../infraestructure/utils/logger");
// Middleware para manejar errores
const errorHandler = (error, req, res) => {
    // Logueo del error
    logger_1.logger.error(`An error occurred in ${req.method} ${req.originalUrl}:`, {
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
exports.errorHandler = errorHandler;
// Manejo de excepciones no capturadas
process.on('uncaughtException', (error) => {
    logger_1.logger.error('Unhandled exception occurred:', {
        message: error.message,
        stack: error.stack,
    });
    // Opcional: Finalizar el proceso si la excepción es crítica
    process.exit(1); // Asegúrate de que este comportamiento sea el que deseas
});
