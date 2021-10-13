import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
          />
        </label>
        <select data-testid="rare-input" name="rarity" id="rarity">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label htmlFor="super-tryunfo">
          Super trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="super-tryunfo"
            id="super-tryunfo"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
