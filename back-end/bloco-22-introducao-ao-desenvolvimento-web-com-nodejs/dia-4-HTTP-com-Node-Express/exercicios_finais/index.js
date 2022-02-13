const express = require('express');


const app = express();
app.use(express.json());

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

app.listen(3001, () => console.log('App ouvindo na porta 3001'));

