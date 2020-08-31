import React, { useState } from 'react';

import { SomosClient } from 'utils'
import Suggestions from '../../components/Suggestions/Suggestions'

import './Search.css'

function Search() {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()
  const client = new SomosClient()

  const handleChange = async e => {
    const newValue = e.target.value

    if (newValue.length > 3) {
      const result = await client.search(newValue)
      setArtistList(result.artists.items.slice(0, 10 - 1.5*newValue.length))
    }
    setQuery(newValue)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await client.search(query)
    setArtistList(result.artists.items)
    setQuery("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
        placeholder="Entre com um Artista" 
        onChange={handleChange}
        type="text"
        value={query}
        className="form-field"
      >
      </input>
      { artistList && query.length > 1 &&
        <Suggestions results={artistList} />
      }
    </form>
  );
}

export default Search;