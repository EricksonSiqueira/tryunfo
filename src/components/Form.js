/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    return (
      <form className="form">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name" className="form-label">
          Nome
          <input
            className="form-control mb-2"
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name"
          />
        </label>
        <label htmlFor="description" className="form-label">
          Descrição
          <textarea
            className="form-control mb-2"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="cardDescription"
          />
        </label>
        <label htmlFor="attr1" className="form-label">
          Atributo 1
          <input
            className="form-control mb-2"
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
          />
        </label>
        <label htmlFor="attr2" className="form-label">
          Atributo 2
          <input
            className="form-control mb-2"
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
          />
        </label>
        <label htmlFor="attr3" className="form-label">
          Atributo 3
          <input
            className="form-control mb-2"
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
          />
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="img-icon">🔗</span>
          <input
            className="form-control"
            placeholder="imagem"
            aria-describedby="img-icon"
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="image"
          />
        </div>
        <label htmlFor="cardRare" className="mb-2">
          Raridade
          <select
            className="form-select"
            data-testid="rare-input"
            name="cardRare"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {
          hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span> : (
            <div className="form-check">
              <label htmlFor="super-tryunfo" className="form-check-label mb-3">
                Super trunfo
              </label>
              <input
                className="form-check-input"
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                id="cardTrunfo"
              />

            </div>
          )
        }
        <button
          className="btn btn-primary"
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
// cardName,
//   cardDescription,
//   cardAttr1,
//   cardAttr2,
//   cardAttr3,
//   cardImage,
//   cardRare,
//   cardTrunfo,
//   onInputChange,

export default Form;
