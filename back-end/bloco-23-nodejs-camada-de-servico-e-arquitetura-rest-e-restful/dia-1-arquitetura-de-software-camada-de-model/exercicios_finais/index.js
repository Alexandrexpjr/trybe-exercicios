const express = require('express');
const { errorMid } = require('./middlewares/user');
const { create, listUsers, findUser, change } = require('./models/User');

const app = express();

app.use(express.json());

app.post('/user', errorMid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const createdUser = await create({firstName, lastName, email, password});
  return res.status(201).json(createdUser);
});

app.get('/user', async (req, res) => {
  const users = await listUsers();
  return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await findUser(id);
    if (userFound.length === 0) return res.status(404).json({ "error": true, "message": "Usuário não encontrado" });
    return res.status(200).json(userFound);
  } catch (err) {
    return res.status(500).json({ "message": "Algo deu errado :(" });
  }
})

app.put('/user/:id', errorMid, async(req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  try {
    const changedUser = await change({ id, firstName, lastName, email, password });
    if (changedUser.length === 0) return res.status(404).json({ "error": true, "message": "Usuário não encontrado" });
    return res.status(200).json(changedUser);
  } catch (err) {
    return res.status(500).json({ "message": "Algo deu errado :(" });
  }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
})