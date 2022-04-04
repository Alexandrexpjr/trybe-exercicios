"use strict";
// ./services/books.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookModel_1 = __importDefault(require("../model/bookModel"));
const connection_1 = __importDefault(require("../model/connection"));
class BookService {
    constructor() {
        this.model = new bookModel_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.model.getAll();
            return books;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.model.getById(id);
            return book;
        });
    }
    create(book) {
        return this.model.create(book);
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new Error('NotFoundError');
            }
            return this.model.update(id, book);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookFound = yield this.model.getById(id);
            if (!bookFound) {
                throw new Error('NotFoundError');
            }
            this.model.remove(id);
        });
    }
}
exports.default = BookService;
