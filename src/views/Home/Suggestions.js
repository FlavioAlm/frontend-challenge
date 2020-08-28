import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = props => {
  const options = props.results.map(r => (
    <li>
      <Link key={r.id} to={`/artista/${r.id}`}>
        {r.name}
      </Link>
    </li>
  ))

  return <ul>{options}</ul>
}


export default Suggestions
