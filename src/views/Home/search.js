import React, { useState } from 'react';
import './search.css'

import { SomosClient } from 'utils'
import { clearToken, getToken } from 'utils'
import { func } from 'prop-types';

function Search(props) {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()

  function handleChange(e) {
    const newValue = e.target.value
    setQuery(newValue)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.searchArtists(query)
    const newArtistList = props.getArtistList()
    console.log(newArtistList)

    setQuery("")
    console.log(artistList)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Entre com o nome de um Artista" onChange={handleChange}></input>
        <button>Procurar</button>
      </form>
    </div>
  );
}

export default Search;