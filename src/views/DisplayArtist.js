import React from 'react';
import { SomosClient } from 'utils'
import { Link } from 'react-router-dom'

class DisplayArtist extends React.Component {
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
      <div className="artist-box">
        <label>Name: </label>
        <p>{artist.name}</p>
        <label>Popularity: </label>
        <p>{artist.popularity}</p>
        <img src={artist.images[2].url} alt={artist.name}/>
        <label>Genres: </label>
        <ul>
        {artist && 
          Object.values(artist.genres)
          .map( (genre) => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
        <p>
          <Link to={`/`}>HOME</Link>
        </p>
      </div>
    )
  }

  
}

export default DisplayArtist;