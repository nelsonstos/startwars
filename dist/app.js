"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./infraestructure/routes/UserRoutes"));
const dynamooseClient_1 = __importDefault(require("./infraestructure/Clients/dynamooseClient"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Inicializar el cliente Dynamoose
dynamooseClient_1.default.getClient();
app.get('/', function (req, res) {
    res.send('Welcome to API!!');
});
app.use('/users', UserRoutes_1.default);
exports.handler = (0, serverless_http_1.default)(app);
