function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
  
// Escreva seu código abaixo.

//Exercicio 1
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < dezDaysList.length; i += 1) {
  let ul = document.querySelector('#days');
  let li = document.createElement('li');
  li.classList = 'day';
  li.innerText = dezDaysList[i];
  ul.appendChild(li);
  if (dezDaysList[i] === 24 | dezDaysList[i] === 31) {
    li.classList.add('holiday');
  } else if (dezDaysList[i] === 4 | dezDaysList[i] === 11 | dezDaysList[i] === 18 ) {
    li.classList.add('friday');
  } else if (dezDaysList[i] === 25) {
    li.classList.add('friday');
    li.classList.add('holiday')
  }
}

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButton(feriados) {
  let criaBotao = document.createElement('button');
  let divBut = document.querySelector('.buttons-container');

  criaBotao.innerText = feriados;
  criaBotao.id = 'btn-holiday';
  divBut.appendChild(criaBotao);
}

createButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function displayHolidays() {
  let getHolidays = document.querySelectorAll('.holiday');
  let getButton = document.querySelector('#btn-holiday');
  let background = "rgb(238,238,238)";
  let newColor = "white";

  getButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      let holiday = getHolidays[index];
      if (holiday.style.backgroundColor === newColor) {
        holiday.style.backgroundColor = background;
      } else {
        holiday.style.backgroundColor = newColor;
      }
    }
  })
}

displayHolidays();

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createAnotherButton(sextas) {
  let criaBotao = document.createElement('button');
  let divBut = document.querySelector('.buttons-container');

  criaBotao.innerText = sextas;
  criaBotao.id = 'btn-friday';
  divBut.appendChild(criaBotao);
}

createAnotherButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFridays(fridaysArray) {
  let getFridays = document.querySelectorAll('.friday');
  let getButton = document.querySelector('#btn-friday');
  const newText = "SEXTOU BB";
  getButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      let friday = getFridays[index];
      if (friday.innerText !== newText) {
        friday.innerText = newText;
      } else {
        friday.innerText = fridaysArray[index];
      }
    }
  })
}
let dezFridays = [ 4, 11, 18, 25 ]
displayFridays(dezFridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomIn () {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function zoomOut () {
  let getDays = document.querySelector('#days');
  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

zoomIn();
zoomOut();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
