/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCards extends React.Component {
  constructor() {
    super();

    this.state = {
      filterInputTxt: '',
      cardRareFilterValue: 'todas',
      cardTrunfoFilterValue: '',
    };

    this.onInputFilterChange = this.onInputFilterChange.bind(this);
  }

  onInputFilterChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
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
    const { filterInputTxt, cardRareFilterValue, cardTrunfoFilterValue } = this.state;
    return (
      <section className="deck-container">
        <hr />
        <div className="card-filter-form">
          <h4>Filtro de busca</h4>
          <input
            className="form-control"
            placeholder="Nome da carta"
            data-testid="name-filter"
            name="filterInputTxt"
            type="text"
            onChange={ this.onInputFilterChange }
          />
          <select
            className="form-select"
            data-testid="rare-filter"
            name="cardRareFilterValue"
            id="cardRareFilterValue"
            value={ cardRareFilterValue }
            onChange={ this.onInputFilterChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <div className="form-check">
            <label
              htmlFor="cardTrunfoFilterValue"
              className="form-check-label"
            >
              Super trunfo
            </label>
            <input
              className="form-check-input"
              data-testid="trunfo-filter"
              type="checkbox"
              name="cardTrunfoFilterValue"
              checked={ cardTrunfoFilterValue }
              onChange={ this.onInputFilterChange }
              id="cardTrunfoFilterValue"
            />
          </div>
        </div>
        <div>
          <h1 className="all-cards-title">Todas as cartas</h1>
          {deck.length === 0 && <p>Nenhuma carta criada.</p>}
          <section className="deck-of-cards">
            {
              deck.map((cardObj, index) => {
                const rarityFilterBool = cardRareFilterValue === 'todas'
                  ? true
                  : cardObj.cardRare === cardRareFilterValue;

                const trunfoFilterBool = !cardTrunfoFilterValue
                  ? true
                  : cardObj.cardTrunfo === true;

                if (
                  cardObj.cardName.includes(filterInputTxt)
                  && rarityFilterBool
                  && trunfoFilterBool
                ) {
                  return (this.creatCardUsingObj(cardObj, () => {
                    onDeleteButtonClick(index);
                  }));
                }

                return '';
              })
            }
          </section>
        </div>
      </section>
    );
  }
}

DeckOfCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,

};

export default DeckOfCards;
