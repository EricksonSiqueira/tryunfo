import React from 'react';
import PropTypes from 'prop-types';

class Attribute extends React.Component {
  render() {
    const { cardAttr, attrName } = this.props;
    return (
      <div className="card-attribute">
        <span>{attrName}</span>
        <p>{cardAttr}</p>
      </div>
    );
  }
}

export default Attribute;

Attribute.propTypes = {
  cardAttr: PropTypes.string.isRequired,
  attrName: PropTypes.string.isRequired,
};
