let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1)

console.log('Bem vinda, ' + info.personagem);

// 2)

info.recorrente = 'Sim';

console.log(info);

// 3)

for (let index in info) {
    console.log(index);
}

// 4) 

for (let i in info) {
    console.log(info[i]);
}

// 5)

let patinhasInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (let i in info) {
    if (info[i] === patinhasInfo[i]) {
        return console.log('Ambos recorrentes')
    }
    console.log(info[i] + ' e ' + patinhasInfo[i]);  
}
