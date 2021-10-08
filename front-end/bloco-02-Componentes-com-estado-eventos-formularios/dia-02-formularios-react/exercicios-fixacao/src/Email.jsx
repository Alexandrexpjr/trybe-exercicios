import React from "react";

class Email extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    let error = undefined;
    if (!value.includes('@') || !value.includes('.com')) {
      error = 'Email inválido'
    }
    return (
      <label className="form-label">
        Email: 
        <input type="email" name="email" id="e-mail" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Email;