const express = require('express');
const { errorMid } = require('./middlewares/user');
const { create } = require('./models/User');

const app = express();

app.use(express.json());

app.post('/user', errorMid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const createdUser = await create({firstName, lastName, email, password});
  return res.status(201).json(createdUser);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
})