import React from "react";
// Na pasta src , crie um arquivo chamado Component.js crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.
class Self extends React.Component {
  render() {
    return (<div className = "info">
      <h1>Alexandre Pimentel</h1>
      <p>Aluno da Trybe</p>
    </div>)
  }
}

export default Self;