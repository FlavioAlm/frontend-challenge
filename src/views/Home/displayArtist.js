import React, { useState, useEffect } from 'react';

function DisplayArtist({ data }) {

  const [artistList, setArtistList] = useState()
  
  useEffect(() => {
    setArtistList(data)
  })

  if (!artistList)
    return null
  return (
    <div className="artist-box">
      <label>Name: </label>
      <p>{artistList[0].name}</p>
      <label>Popularity: </label>
      <p>{artistList[0].popularity}</p>
      <img src={artistList[0].images[2].url} alt={artistList[0].name}/>
      <label>Genres: </label>
      <ul>
      {artistList && 
        Object.values(artistList[0].genres)
        .map( (genre) => {
          return (
            <li key={genre}>{genre}</li>
          )
        })}
      </ul>
    </div>
  )
  
}

export default DisplayArtist;