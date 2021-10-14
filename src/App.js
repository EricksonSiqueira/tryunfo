import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    };

    this.verifyIfInputsAreFiled = this.verifyIfInputsAreFiled.bind(this);
    this.verifyAttributesSum = this.verifyAttributesSum.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
    console.log(this.verifyAttributesSum());
  }

  onSaveButtonClick() {
    console.log('clicou');
  }

  verifyAttributesSum() {
    const max = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const atributeSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    return (atributeSum < max);
  }

  verifyIfInputsAreFiled() {
    const stateValues = Object.values(this.state);
    const stringValues = stateValues.filter((value) => typeof value === 'string');
    const inputsAreFiled = stringValues.every((value) => value);

    return inputsAreFiled;
  }

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
