import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.poke;
    return (
      <div className="pokemon">
        <div className="info">
          <h3 className="name">{name}#{id}</h3>
          <p className="type">{type}</p>
          <p className="weight">{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className="image-div">
          <a href={moreInfo}>
            <img src={image} alt={name} />
          </a>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired
  })
}

export default Pokemon;