const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const createdBook = await Book.create({ title, author, pageQuantity });
    console.log(createdBook)
    return res.status(201).json(createdBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;