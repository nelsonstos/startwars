"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = sendResponse;
// Método genérico para enviar respuestas
function sendResponse(res, statusCode, data, message, dataName = 'data' // Nombre por defecto para la propiedad de datos
) {
    const responseObject = {
        status: statusCode,
        message: message || (statusCode >= 200 && statusCode < 300 ? 'Success' : 'Error'),
    };
    // Identificar automáticamente si data es un objeto o un array
    if (Array.isArray(data)) {
        responseObject[dataName + 's'] = data; // Respuesta para listas (agrega 's' para plural)
    }
    else if (data) {
        responseObject[dataName] = data; // Respuesta para un solo objeto
    }
    else {
        responseObject[dataName] = null; // Caso en que no hay datos
    }
    return res.status(statusCode).json(responseObject);
}
