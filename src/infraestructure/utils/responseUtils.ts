import { Response } from 'express';

// Método genérico para enviar respuestas
export function sendResponse(
    res: Response,
    statusCode: number,
    data: any,
    message?: string,
    dataName: string = 'data' // Nombre por defecto para la propiedad de datos
) {
    const responseObject: any = {
        status: statusCode,
        message: message || (statusCode >= 200 && statusCode < 300 ? 'Success' : 'Error'),
    };

    // Identificar automáticamente si data es un objeto o un array
    if (Array.isArray(data)) {
        responseObject[dataName + 's'] = data; // Respuesta para listas (agrega 's' para plural)
    } else if (data) {
        responseObject[dataName] = data; // Respuesta para un solo objeto
    } else {
        responseObject[dataName] = null; // Caso en que no hay datos
    }

    return res.status(statusCode).json(responseObject);
}

