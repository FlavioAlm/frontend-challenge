import React, { useState } from 'react';

import './search.css'
import DisplayArtist from './displayArtist';
import { SomosClient } from 'utils'

function Search() {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()
  const client = new SomosClient()

  function handleChange(e) {
    const newValue = e.target.value
    setQuery(newValue)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await client.search(query)
    setArtistList(result.artists.items)
    setQuery("")
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Entre com o nome de um Artista" onChange={handleChange}></input>
        <button>Procurar</button>
      </form>
      <DisplayArtist data={artistList} />
    </div>
  );
}

export default Search;