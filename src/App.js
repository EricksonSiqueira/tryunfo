import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckOfCards from './components/DeckOfCards';
import './App.css';

const defaultState = {
  cardName: 'Teste',
  cardDescription: '',
  cardAttr1: '1',
  cardAttr2: '1',
  cardAttr3: '1',
  cardImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: 'Teste',
      cardDescription: '',
      cardAttr1: '1',
      cardAttr2: '1',
      cardAttr3: '1',
      cardImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };

    this.verifyIfInputsAreFiled = this.verifyIfInputsAreFiled.bind(this);
    this.verifyAttributesSum = this.verifyAttributesSum.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyAttributesMinMaxValue = this.verifyAttributesMinMaxValue.bind(this);
    this.toggleSaveButton = this.toggleSaveButton.bind(this);
    this.createCardObj = this.createCardObj.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.toggleSaveButton() });
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardTrunfo, deck } = this.state;
    this.setState({ deck: this.createNewDeckArray(deck) }, () => {
      if (cardTrunfo === true) this.setState({ hasTrunfo: true });
      this.setState(defaultState);
    });
  }

  onDeleteButtonClick(index) {
    const { deck } = this.state;
    const enableTrunfo = this.verifyIfCardIsTryunfo(index, deck);
    this.setState({ hasTrunfo: !enableTrunfo });
    this.setState((previousState) => ({
      deck: this.removeCardFromDeck(index, previousState.deck),
    }));
  }

  removeCardFromDeck(deletedCardIndex, deck) {
    const newDeck = deck.filter((_cardObj, index) => index !== deletedCardIndex);
    return newDeck;
  }

  verifyIfCardIsTryunfo(deletedCardIndex, deck) {
    const card = deck.find((_cardObj, index) => index === deletedCardIndex);
    const isTryunfo = card.cardTrunfo;

    return isTryunfo;
  }

  createNewDeckArray(deck) {
    const newDeck = [...deck, this.createCardObj()];

    return newDeck;
  }

  createCardObj() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    return cardObj;
  }

  toggleSaveButton() {
    const buttonShouldBeDisable = !(
      this.verifyAttributesMinMaxValue()
      && this.verifyAttributesSum()
      && this.verifyIfInputsAreFiled()
    );

    return buttonShouldBeDisable;
  }

  verifyAttributesMinMaxValue() {
    const max = 90;
    const min = 0;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cardAttributesArr = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3),
    ];
    const attrAreUnderMaxValue = cardAttributesArr
      .every((attribute) => (attribute <= max && attribute >= min));

    return attrAreUnderMaxValue;
  }

  verifyAttributesSum() {
    const max = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const atributeSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    return (atributeSum <= max);
  }

  verifyIfInputsAreFiled() {
    const stateValues = Object.values(this.state);
    const stringValues = stateValues.filter((value) => typeof value === 'string');
    const inputsAreFiled = stringValues.every((value) => value);

    return inputsAreFiled;
  }

  render() {
    const {
      deck,
    } = this.state;
    return (
      <div className="app">
        <div className="creation-section">
          <section className="form-section">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="preview">
            <section className="preview-content">
              <h2 className="preview-title">Pr??-visualiza????o</h2>
              <Card
                { ...this.state }
                hasButton={ false }
              />
            </section>
          </section>
        </div>
        <DeckOfCards deck={ deck } onDeleteButtonClick={ this.onDeleteButtonClick } />
      </div>
    );
  }
}

export default App;
