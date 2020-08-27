import React from 'react';
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

import './Artist.css'

class Artist extends React.Component {
  state= {
    loading: true,
  }
  
  async componentDidMount() {
    const artistId = this.props.match.params.id
    const result = await this.client.getArtist(artistId)
    this.setState({ artist: result, loading: false })
  }

  client = new SomosClient()

  render() {
    const { loading, artist } = this.state
    if (loading)
      return null
    return (
        <div className="artist-card">
          <img
            className="artis-box image" 
            src={artist.images[1].url} 
            alt={artist.name} style={{width:350}}
          />

          <div className="info">
            <label className="info-box">{`Name: ${artist.name}`}</label>
            <label className="info-box">{`Popularity: ${artist.popularity}`}</label>
          </div>

          <label className="genre-title">Genres</label>
            <ul className="genre">
            {artist && 
              Object.values(artist.genres)
              .map( (genre) => {
                return (
                  <li className="genre-box" key={genre}>{genre}</li>
                )
              })}
            </ul>

            <p>
              <Link className="link" to={`/`}>Return</Link>
            </p>
        </div>
    )
  }

  
}

export default Artist;