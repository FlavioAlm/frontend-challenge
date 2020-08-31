import React from 'react'
import { Link } from 'react-router-dom'

import "./RenderArtist.css"

const RenderArtist = ({artist}) => {

  
  let imageURL=""
  if (artist.images === undefined) {
    imageURL="default-picure.png"
  } else {
    imageURL=artist.images[1].url
  }
  
  return (
    <>
      <div className="artist-card">      
        <img
          className="artist-image" 
          src={imageURL} 
          alt={artist.name} 
        />

        <div className="artist-info">
          <label className="info-box">{`Name: ${artist.name}`}</label>
          <label className="info-box">{`Popularity: ${artist.popularity}`}</label>
        </div>

        <label className="artist-genres-strip">Genres</label>
        <ul className="artist-genre-box">
          {artist && 
            artist.genres.map(genre => 
                <li className="artist-genre-item" key={genre}>{genre}</li>
            )
          }
        </ul>

        <p>
          <Link className="artist-link" to={`/busca`}>Return</Link>
        </p>
      </div>
    </>
  )
  }

export default RenderArtist