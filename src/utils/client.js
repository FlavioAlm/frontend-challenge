import { clearToken, getToken } from 'utils'

import Spotify from 'spotify-web-api-js';
import React, { Component } from 'react';

const spotifyWebApi = new Spotify ();

class SomosClient {
  constructor(props) {
    this.state = {
      artistList: {},
      accessToken: getToken() 
    }

    console.log("construtor")
    console.log(this)

    spotifyWebApi.setAccessToken(this.state.accessToken)
    this.getArtistList = this.getArtistList.bind(this)
    this.searchArtists = this.searchArtists.bind(this)
  }
  
  onError = error => {}

  getArtistList() {
    console.log("get")
    console.log(this)
    console.log(this.state.artistList)
    return this.state.artistList
  }

  async searchArtists(query) {
    console.log("search")
    console.log(query)
    spotifyWebApi.searchArtists(query)
    .then( response => {
      console.log(response)
      const artistList = response.artists.items;
      console.log(this)
      this.setState({
        artistList: artistList
      })
    })
  }

}

export default SomosClient

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/