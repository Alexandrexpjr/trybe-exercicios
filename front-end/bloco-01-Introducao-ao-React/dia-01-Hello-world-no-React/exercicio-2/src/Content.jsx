import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const content = conteudos.map((content, index) => {
  return (
    <li key={index}>
      <p>O conteúdo é: {content.conteudo}</p>
      <p>Status: {content.status}</p>
      <p>Bloco: {content.bloco}</p>
    </li>
  )
})

class Content extends React.Component {
  render() {
    return (
      content
    )
  }
}

export default Content;
