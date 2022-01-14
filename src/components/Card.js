import React from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';
import tryunfoImg from '../img/tryunfo.png';

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
              <h2
                data-testid="name-card"
                className="card-name"
              >
                {cardName}
              </h2>
              <p
                data-testid="description-card"
                className="card-description"
              >
                { cardDescription }
              </p>
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr1 }
                attrName="🪓 Poder de ataque"
                bgColor={ `bg-${'red'}` }
              />
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr2 }
                attrName="🔮 Poder de habilidade"
                bgColor={ `bg-${'blue'}` }
              />
              <Attribute
                data-testid="attr1-card"
                cardAttr={ cardAttr3 }
                attrName="💚 Vida"
                bgColor={ `bg-${'yellow'}` }
              />
              <span
                data-testid="rare-card"
                className="card-rarity"
              >
                {cardRare}
              </span>
              {
                cardTrunfo === true
                && <img src={ tryunfoImg } alt="tryunfo" className="tryunfo" />
              }
            </div>
          </div>
          {
            hasButton === true
            && (
              <button
                data-testid="delete-button"
                type="button"
                onClick={ onDeleteButtonClick }
                className="delete-button  btn btn-danger"
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
