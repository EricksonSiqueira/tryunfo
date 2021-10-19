import React from 'react';
import PropTypes from 'prop-types';

class Attribute extends React.Component {
  render() {
    const { cardAttr, attrName, bgColor } = this.props;
    return (
      <div className="card-attribute ">
        <span>
          {attrName}
        </span>
        <span className={ `card-attribute-number ${bgColor}` }>
          <p>{cardAttr}</p>
        </span>
      </div>
    );
  }
}

export default Attribute;

Attribute.propTypes = {
  cardAttr: PropTypes.string.isRequired,
  attrName: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
