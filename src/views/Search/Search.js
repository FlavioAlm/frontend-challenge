import React, { useState } from 'react';

import { SomosClient } from 'utils'
import { Suggestions } from 'components'
import { withLoading } from 'components'

import './Search.css'

function Search() {
  const [query, setQuery] = useState("")
  const [artistList, setArtistList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const client = new SomosClient()

  const handleChange = async e => {
    const newValue = e.target.value
    const maxSuggestionsLettersToSearch = 6
    const minSuggestionsItems = 3
    let numSuggestionsItems = 10 - 1.3*newValue.length

    if (newValue.length > 3) {
      setIsLoading(true)
      if (newValue.length >= maxSuggestionsLettersToSearch) {
        numSuggestionsItems = minSuggestionsItems
      }
      const result = await client.search(newValue)
      setArtistList(result.artists.items.slice(0, numSuggestionsItems))
    }
    setQuery(newValue)
    setIsLoading(false)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await client.search(query)
    setArtistList(result.artists.items)
    setQuery("")
  }

  const SuggestionsWithLoading = withLoading(Suggestions)

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        className="search-form-field"
        placeholder="Search for your favorite Artist" 
        onChange={handleChange}
        type="text"
        value={query}
        required
      >
      </input>

      { query.length > 3 && 
        <SuggestionsWithLoading isLoading={isLoading} results={artistList} />
      }
    </form>
  );
}

export default Search;