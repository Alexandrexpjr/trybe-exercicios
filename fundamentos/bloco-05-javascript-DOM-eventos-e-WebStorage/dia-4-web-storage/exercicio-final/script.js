// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

window.onload = function() {
    //seleciona a cor do BG
    let select = document.querySelector('#backgroundColor');
    let body = document.querySelector('body');
    select.addEventListener('change', function(event) {
        let selected = event.target.selectedOptions[0];
        localStorage.backgroundColor = selected.value;
        body.style.backgroundColor = localStorage.backgroundColor;
    })
    //seleciona a cor da letra
    let colorSelect = document.querySelector('#color');
    colorSelect.addEventListener('change', function(event) {
        let selectedColor = event.target.selectedOptions[0];
        localStorage.color = selectedColor.value;
        body.style.color = localStorage.color;
    })
}