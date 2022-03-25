"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.use(bookRoute_1.default); // coloque essa linha antes do middleware de erro!
app.use((err, req, res, next) => {
    const { name, message, details } = err;
    console.log(`name: ${name}`);
    switch (name) {
        case 'ValidationError':
            res.status(400).json({ message: details[0].message });
            break;
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ConflitError':
            res.status(409).json({ message });
            break;
        default:
            console.error(err);
            res.sendStatus(500);
    }
    next();
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
