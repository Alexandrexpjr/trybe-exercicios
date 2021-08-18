const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const getEstado = document.getElementById('estado');
for(let estado of estados) {
    const createOption = document.createElement('option');
    createOption.innerHTML = estado;
    getEstado.appendChild(createOption);
}

