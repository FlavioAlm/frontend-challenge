import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './search.css'
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
      { artistList &&
        <p>
          <br/>
          <br/>
          <label className="result">Resultado: </label>
          <Link className="result" to={`/artista/${artistList[0].id}`}>{artistList[0].name}</Link>
        </p>
      }
    </div>
  );
}

          //<DisplayArtist data={artistList} />
export default Search;