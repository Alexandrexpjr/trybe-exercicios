// routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controller/bookController';
import validationBook from '../middleware/bookMiddleware';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById); 
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;