import React from 'react';
import { Link } from 'react-router-dom'

import { SomosClient } from 'utils'

import './Artist.css'

class Artist extends React.Component {
  state= {
    loading: true,
  }
  
  async componentDidMount() {
    const artistId = this.props.match.params.id
    const result = await this.client.getArtist(artistId)
    const artistAlbums = await this.client.getArtistAlbums(artistId)
    this.setState({ artist: result, albums: artistAlbums.items, loading: false })
  }

  client = new SomosClient()

  render() {
    const { artist, albums, loading } = this.state

    if (loading) {
      console.log("loading")
      return null
    }

    let imageURL=""
    if (artist.images === undefined) {
      imageURL="default-picure.png"
    } else {
      imageURL=artist.images[1].url
    }

    return (
      <div>
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
              <Link className="artist-link" to={`/`}>Return</Link>
            </p>
        </div>
        <hr/>

        <h2 className="album-heading">Albums</h2>
        <hr/>

        <div className="album-container">
          {artist &&
            albums.map( item => 
              <ul className="album-card" key={item.name}>
                <li>
                  <img 
                    className="album-image" 
                    src={item.images[0].url}  
                    alt={item.name}
                  />
                </li>
                <li><label className="album-name">{item.name}</label></li>
                <li><label className="album-date">{item.release_date}</label></li>
              </ul>
            )
          }
        </div>
      </div>

    )
  }

  
}

export default Artist;