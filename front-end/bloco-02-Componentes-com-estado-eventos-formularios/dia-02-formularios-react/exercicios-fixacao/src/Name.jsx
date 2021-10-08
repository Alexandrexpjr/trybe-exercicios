import React from "react";

class Name extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label className="form-label">
        Nome: 
        <input type="text" name="name" id="name" onChange={handleChange} />
      </label>
    )
  }
}

export default Name;