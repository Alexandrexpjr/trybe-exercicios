const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Variável e função abaixo utilizadas para conseguir comparar o 'A' com acento em 'Água mineral'
// E conseguir colocar as bebidas em ordem alfabética da forma correta
// Função criada po @hertz1, retira do github do mesmo no link: https://gist.github.com/hertz1/686e90aeffb4d166ab1a

// let map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
// function removerAcentos(s){ return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a}) };

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function(req, res) {
  res.json(drinks)
});

app.get('/ordened_drinks', function(req, res) {
  const ordened_drinks = drinks.sort((a, b) => {
    if (removerAcentos(a.name )< removerAcentos(b.name)) {
      return -1;
    }
    if (removerAcentos(a.name )> removerAcentos(b.name)) {
      return 1;
    }
    return 0
  }) 
  res.json(ordened_drinks)
});

app.get('/drinks/search', function(req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));
  if (!drink) {
    return res.status(404).json({ message: 'Drink not found'});
  }
  res.status(200).json(drink);
})

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex(r => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002')
});