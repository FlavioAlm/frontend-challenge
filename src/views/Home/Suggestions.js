import React from 'react'
import { Link } from 'react-router-dom'
import './Suggestions.css'

const Suggestions = props => {
  const options = props.results.map(r => (
    <li className="suggestion-item">
      <Link key={r.id} to={`/artista/${r.id}`}>
        {r.name}
      </Link>
    </li>
  ))

  return <ul>{options}</ul>
}


export default Suggestions
