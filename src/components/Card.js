import React from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasButton,
      onDeleteButtonClick,
    } = this.props;

    return (
      <article className="card-outer">
        <div className="card">
          <div>
            <img
              data-testid="image-card"
              className="card-img"
              src={ cardImage }
              alt={ cardName }
            />
            <div className="card-txt">
              <h2 data-testid="name-card">{cardName}</h2>
              <p data-testid="description-card">{cardDescription}</p>
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr1 }
                attrName="Poder de ataque"
              />
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr2 }
                attrName="Poder de habilidade"
              />
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr3 }
                attrName="Defesa"
              />
              <span data-testid="rare-card">{cardRare}</span>
              {cardTrunfo === true && <span data-testid="trunfo-card">Super Trunfo</span>}
            </div>
          </div>
          {
            hasButton === true
            && (
              <button
                data-testid="delete-button"
                type="button"
                onClick={ onDeleteButtonClick }
              >
                Excluir
              </button>)
          }
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasButton: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func,
};

Card.defaultProps = {
  onDeleteButtonClick: () => {},
};

export default Card;
