import React from 'react'
import { Link } from 'react-router-dom'
import './Suggestions.css'

const Suggestions = props => {
  console.log(props)
  const options = props.results.map(r => (
    <li key={r.id} className="suggestion-item">
      <Link to={`/artista/${r.id}`}>
        <label>{r.name}</label>
        <img className="suggest-img" src={r.images[0].url} alt={r.name} />
      </Link>
    </li>
  ))

  return <ul>{options}</ul>
}


export default Suggestions
