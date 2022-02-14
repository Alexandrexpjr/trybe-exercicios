const express = require('express');
const findSimpson = require('./controllers/findSImpson');
const simpsonsUtils = require('./controllers/fs-utils');
const generateToken = require('./helpers/generateToken');
const auth = require('./middleware/auth');

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields'});
  }
  return res.status(200).json({ token: generateToken() })
});

app.use(auth);

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(age < 0 || typeof age !== 'number') {
    return res.status(400).json({ message: 'Invalid age' })
  }
  if (age >= 17) {
    return res.status(200).json({ message: `Hello, ${name}!`});
  }
  return res.status(401).json({ message: "Unauthorized"});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.get('/simpsons', async (req, res) => {
  try {
    const getSimpsons = await simpsonsUtils.getSimpsons();
    return res.status(200).json(getSimpsons)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error'})
  }
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const simpson = await findSimpson(id);

    if (!simpson) throw new Error();

    return res.status(200).json(simpson);
  } catch(err) {
    return res.status(404).json({ message: 'Not Found'});
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();

  try {
    const simpson = await findSimpson(id);

    if(simpson) throw new Error();

    const newSimpson = { id, name };
    console.log([...simpsons, newSimpson])
    await simpsonsUtils.setSimpsons([...simpsons, newSimpson]);
    return res.status(204).end();
  } catch (err) {
    return res.status(409).json({ message: 'id already exists'})
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});


app.listen(3001, () => console.log('App ouvindo na porta 3001'));

