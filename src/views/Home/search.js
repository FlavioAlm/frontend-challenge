import React, { useState } from 'react';

import './search.css'
import { SomosClient } from 'utils'
import Suggestions from './Suggestions'

function Search() {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()
  const client = new SomosClient()

  const handleChange = async e => {
    const newValue = e.target.value

    if (newValue.length > 2) {
      const result = await client.search(newValue)
      setArtistList(result.artists.items)
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          placeholder="Entre com um Artista" 
          onChange={handleChange}
          value={query}
        >
        </input>
        { artistList &&
          <Suggestions results={artistList} />
        }
      </form>
      

    </div>
  );
}

export default Search;