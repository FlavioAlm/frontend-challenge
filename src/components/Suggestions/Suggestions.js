import React from 'react'
import { Link } from 'react-router-dom'

import './Suggestions.css'

const Suggestions = ({results}) => {

  return (
    <ul className="suggestion-list">
    {results.map(r => 
      <li key={r.id} className="suggestion-item">
        <Link to={`/artista/${r.id}`}>
          <label>{r.name}</label>
          {!r.images.length 
            ? <img className="suggestion-img" src="noImageAvailable.jpg" alt="noImageAvailable" />
            : <img className="suggestion-img" src={r.images[0].url} alt={r.name} />
          }
        </Link>
      </li>
    )}
  </ul>
  )
} 


export default Suggestions
