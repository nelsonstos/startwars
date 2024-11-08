"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb"); // SDK V3
const dynamoose_1 = __importDefault(require("dynamoose"));
const config_1 = require("../config/config");
class DynamooseClient {
    // Constructor privado para evitar instanciación externa
    constructor() { }
    // Método para obtener la instancia del cliente
    static getClient() {
        if (!this.instance) {
            // Validar configuraciones necesarias
            if (!config_1.config.awsRegion || !config_1.config.credentials.accessKeyId || !config_1.config.credentials.secretAccessKey) {
                throw new Error('Faltan configuraciones necesarias para DynamoDB.');
            }
            try {
                this.instance = new client_dynamodb_1.DynamoDB({
                    region: config_1.config.awsRegion,
                    endpoint: config_1.config.stage === 'dev' ? config_1.config.dynamoDbLocalEndpoint : undefined, // Configura solo si está en dev
                    credentials: {
                        accessKeyId: config_1.config.credentials.accessKeyId,
                        secretAccessKey: config_1.config.credentials.secretAccessKey,
                    },
                });
                // Configurar Dynamoose para usar el cliente de DynamoDB V3
                dynamoose_1.default.aws.ddb.set(this.instance);
                console.log(`Dynamoose configurado para el entorno: ${config_1.config.stage}`);
            }
            catch (error) {
                console.error('Error al crear la instancia de DynamoDB:', error);
                throw new Error('No se pudo inicializar el cliente de DynamoDB.');
            }
        }
        return this.instance;
    }
}
exports.default = DynamooseClient;
