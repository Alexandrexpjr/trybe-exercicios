"use strict";
// routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = __importDefault(require("../controller/bookController"));
const bookMiddleware_1 = __importDefault(require("../middleware/bookMiddleware"));
const router = (0, express_1.Router)();
const booksController = new bookController_1.default();
const booksSlashId = '/books/:id';
router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', bookMiddleware_1.default, booksController.create);
router.put(booksSlashId, bookMiddleware_1.default, booksController.update);
router.delete(booksSlashId, booksController.remove);
exports.default = router;
