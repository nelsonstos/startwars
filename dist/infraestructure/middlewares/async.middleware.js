"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("./errorHandler");
const asyncMiddleware = (fn) => (req, res, next) => {
    fn(req, res, next).catch((error) => {
        return (0, errorHandler_1.errorHandler)(error, req, res);
    });
};
exports.default = asyncMiddleware;
