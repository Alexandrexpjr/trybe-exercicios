import React from "react";
import Email from "./Email";
import Name from "./Name";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      estado: '',
      name: '',
      email: '',
      info: '',
      agree: false,
      formularioComErros: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange({ target }) {
    console.log()
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  handleError() {
    const { name, email, agree } = this.state;

    const errorCases = [
      !(name.length < 20),
      !(email.includes('@')),
      !agree,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  render() {
    return(
      <div>
        <form className="form">
          <fieldset>
            <legend>Dados pessoais</legend>
            <Email handleChange={this.handleChange} value={this.state.email} />
            <Name handleChange={this.handleChange} value={this.state.name} />
          </fieldset>
          <label className="form-label">
            Escolha seu estado:
            <select name="estado" id="state" value={this.state.estado} onChange={this.handleChange}>
              <option value=""></option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Outro">Outro</option>
            </select>
          </label>
          <label className="form-label">
            Fale um pouco mais sobre você:
            <textarea name="info" id="textarea" cols="30" rows="10" onChange={this.handleChange}></textarea>
          </label>
          <label className="form-label">
            Li e concordo
            <input type="checkbox" name="agree" id="checkbox-input" onChange={this.handleChange} />
          </label>
          <label className="form-label">
            Arquivo sobre qlqr coisa:
            <input type="file" name="file" id="file-input" />
          </label>
        </form>
        { this.state.formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
}

export default Form;

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.
// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.
// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.
// 6 - Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .
// 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.
// 8 - Faça duas validações em um desses componentes filhos e uma em um outro.
// 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.