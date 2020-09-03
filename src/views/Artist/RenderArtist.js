import React from 'react'
import { Link } from 'react-router-dom'

import "./RenderArtist.css"

const RenderArtist = ({artist}) => 
  
  <>
    <article className="artist-card">
      {!artist.images.length
        ? <img
            className="artist-image" 
            src="noImageAvailable.jpg"  
            alt="noImageAvailable.jpg"
          />      
        : <img
            className="artist-image" 
            src={artist.images[1].url} 
            alt={artist.name} 
          />
      }

      <section className="artist-info">
        <label className="info-box">
          {`Name: ${artist.name}`}
        </label>
        <label className="info-box">
          {`Popularity: ${artist.popularity}`}
        </label>
      </section>

      <h2 className="artist-genres-strip">Genres</h2>
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
    </article>
  </>

export default RenderArtist