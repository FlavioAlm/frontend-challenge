import React, { useState } from 'react';

import { SomosClient } from 'utils'
import { Suggestions } from 'components'

import './Search.css'

function Search() {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()
  const client = new SomosClient()

  const handleChange = async e => {
    const newValue = e.target.value
    const maxSuggestionsLettersToSearch = 6
    const minSuggestionsItems = 3
    let numSuggestionsItems = 10 - 1.3*newValue.length

    if (newValue.length > 3) {
      if (newValue.length >= maxSuggestionsLettersToSearch) {
        numSuggestionsItems = minSuggestionsItems
      }
      const result = await client.search(newValue)
      setArtistList(result.artists.items.slice(0, numSuggestionsItems))
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
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        placeholder="Entre com um Artista" 
        onChange={handleChange}
        type="text"
        value={query}
        className="search-form-field"
        required
      >
      </input>
      { artistList && query.length > 1 &&
        <Suggestions results={artistList} />
      }
    </form>
  );
}

export default Search;