import React from 'react';

import { SomosClient } from 'utils'
import RenderArtist from './RenderArtist'
import Albums from '../Albums/Albums'

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
    if (loading) return <h2> Loading... </h2>

    return (
      <div>
      <RenderArtist artist={artist} />

      { artist &&
        <Albums albums={albums} />
      }
      </div>
    )
  }
  
}

export default Artist;