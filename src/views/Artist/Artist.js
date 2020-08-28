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
    console.log(artistId)
    console.log(this)
  }

  client = new SomosClient()

  render() {
    console.log(this)
    const { artist, albums, loading } = this.state
    console.log(albums)
    console.log(artist)

    
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
            className="artis-box image" 
            src={imageURL} 
            alt={artist.name} style={{width:280}}
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
        <div className="album">
          {artist &&
            albums.map( item => (
              <ul key={item.name}>
                <li><label>{item.name}</label></li>
                <li><label>{item.release_date}</label></li>
                <li><img src={item.images[0].url} width="100" alt={item.name}/></li>
                <br></br>
              </ul>
            ))
          }
        </div>
      </div>

    )
  }

  
}

export default Artist;