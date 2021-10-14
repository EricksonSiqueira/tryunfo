import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCards extends React.Component {
  creatCardUsingObj(cardObj, buttonFunction) {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = cardObj;

    return (
      <Card
        key={ cardName }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        hasButton
        onDeleteButtonClick={ buttonFunction }
      />
    );
  }

  render() {
    const { deck, onDeleteButtonClick } = this.props;
    return (
      <section>
        <h1>Todas as cartas</h1>
        {
          deck.map((cardObj, index) => this.creatCardUsingObj(cardObj, () => {
            onDeleteButtonClick(index);
          }))
        }
      </section>
    );
  }
}

DeckOfCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,

};

export default DeckOfCards;
