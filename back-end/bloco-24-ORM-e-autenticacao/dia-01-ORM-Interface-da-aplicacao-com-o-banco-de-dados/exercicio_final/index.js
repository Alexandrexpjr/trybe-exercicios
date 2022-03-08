const express = require('express');
const bookController = require('./controllers/bookController');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/book', bookController);

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}!`)
});