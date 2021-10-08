import React from "react";

class Email extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label className="form-label">
        Email: 
        <input type="email" name="email" id="e-mail" onChange={handleChange} />
      </label>
    )
  }
}

export default Email;