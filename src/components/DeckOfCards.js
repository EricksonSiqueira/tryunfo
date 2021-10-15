import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCards extends React.Component {
  constructor() {
    super();

    this.state = {
      filterInputTxt: '',
    };

    this.onInputFilterChange = this.onInputFilterChange.bind(this);
  }

  onInputFilterChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  creatCardUsingObj(cardObj, buttonFunction) {
    const { cardName,
    } = cardObj;

    return (
      <Card
        key={ cardName }
        { ...cardObj }
        hasButton
        onDeleteButtonClick={ buttonFunction }
      />
    );
  }

  render() {
    const { deck, onDeleteButtonClick } = this.props;
    const { filterInputTxt } = this.state;
    return (
      <section>
        <div>
          <h4>Filtro de busca</h4>
          <input
            data-testid="name-filter"
            name="filterInputTxt"
            type="text"
            onChange={ this.onInputFilterChange }
          />
        </div>
        <h1>Todas as cartas</h1>
        {
          deck.map((cardObj, index) => {
            if (cardObj.cardName.includes(filterInputTxt)) {
              return (this.creatCardUsingObj(cardObj, () => {
                onDeleteButtonClick(index);
              }));
            }
            return '';
          })
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
