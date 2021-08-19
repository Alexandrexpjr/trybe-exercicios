const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const getEstado = document.getElementById('estado');
const getDate = document.getElementById('dataInicio');
const getSubmit = document.getElementById('enviar');
const getForm = document.getElementById('form');
const getDiv = document.getElementById('relatorio');
const getClear = document.getElementById('limpar');

for(let estado of estados) {
    const createOption = document.createElement('option');
    createOption.innerHTML = estado;
    getEstado.appendChild(createOption);
}

function checkDate() {
    const data = getDate.value;
    const day = parseInt(data.slice(0, 2));
    const month = parseInt(data.slice(3,5));
    const year = parseInt(data.slice(6));
    const slashes = data.slice(2,3) + data.slice(5,6);

    if (!data) return getDate.value = '';
    if (day < 1 || day > 31) return alert('Dia inválido!');
    if (month < 1 || month > 12) return alert('Mês inválido!');
    if (year < 0) return alert('Ano inválido!');
    if (slashes !== '//') return alert('Data inválida!');  

    return console.log(day, month, year, slashes);
}

function getInfo(event) {
    //usei o preventDefault no form e não no button, com a ajuda de um amigo;
    event.preventDefault();
    const fields = event.target.elements;
    const result = `Nome: ${fields['nome'].value} <br>` +
    `Email: ${fields['email'].value} <br>` + 
    `Cpf: ${fields['cpf'].value} <br>` + 
    `Endereço: ${fields['endereco'].value} <br>` + 
    `Cidade: ${fields['cidade'].value} <br>` + 
    `Estado: ${fields['estado'].value} <br>` + 
    `Moradia: ${fields['moradia'].value} <br>` + 
    `Resumo do currículo: ${fields['resumo'].value} <br>` + 
    `Cargo: ${fields['cargo'].value} <br>` + 
    `Descrição do cargo: ${fields['descricaoCargo'].value} <br>` + 
    `Data de início: ${fields['dataInicio'].value} <br>`;
    getDiv.innerHTML = result;
}

function clearAll() {
    getDiv.innerHTML = '';
}

getDate.addEventListener('focusout', checkDate);
getForm.addEventListener('submit', getInfo);
getClear.addEventListener('click', clearAll);
