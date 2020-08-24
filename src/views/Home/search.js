import React, { Component } from 'react';
import './search.css'

import { SomosClient } from 'utils'

class Search extends Component {


  render() {
    return (
      <div>
        <form className="form">
          <label>Entre com o nome de um artista</label>
          <input></input>
          <button>Procurar</button>
        </form>
      </div>
    );
  }
}

export default Search;