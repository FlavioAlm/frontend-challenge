import React from 'react';

import { SomosClient } from 'utils'
import { Albums } from 'views'
import { withLoading } from 'components'
import RenderArtist from './RenderArtist'


class Artist extends React.Component {
  state= {
    isLoading: true,
  }
  
  async componentDidMount() {
    const artistId = this.props.match.params.id
    const result = await this.client.getArtist(artistId)
    const artistAlbums = await this.client.getArtistAlbums(artistId)
    this.setState({ artist: result, albums: artistAlbums.items, isLoading: false })
  }

  client = new SomosClient()

  render() {
    const { artist, albums, isLoading } = this.state
    const RenderArtistWithLoading = withLoading(RenderArtist)

    return (
      <main>
        <RenderArtistWithLoading isLoading={isLoading} artist={artist} />
        { artist &&
          <Albums albums={albums} />
        }
      </main>
    )
  }
  
}

export default Artist;