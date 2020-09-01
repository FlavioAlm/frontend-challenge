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
    const slicingRate = 10 - 1.3*newValue.length
    console.log("newVL:" + newValue.length)
    console.log(slicingRate)
    const maxSlicingRate = 6

    if (3 < newValue.length  && newValue.length < maxSlicingRate) {
      console.log("1o if")
      const result = await client.search(newValue)
      setArtistList(result.artists.items.slice(0, slicingRate))
    }
    if (newValue.length >= maxSlicingRate) {
      console.log("1o if")
      const result = await client.search(newValue)
      setArtistList(result.artists.items.slice(0, 3))      
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