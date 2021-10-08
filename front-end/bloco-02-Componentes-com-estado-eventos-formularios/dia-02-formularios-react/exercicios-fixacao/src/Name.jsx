import React from "react";

class Name extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    let error = undefined;

    if (value.length > 20){
      error = 'Nome muito grande!'
    }

    return (
      <label className="form-label">
        Nome: 
        <input type="text" name="name" id="name" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Name;