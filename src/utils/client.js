import { clearToken, getToken } from 'utils'

import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify ();

class SomosClient {
  constructor() {
    spotifyWebApi.setAccessToken(getToken())
  }

  onError = error => {}

  async getArtists(query) {
    spotifyWebApi.searchArtists(query)
    .then( (response) => {
      console.log( response)
    })
  }
}

export default SomosClient

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/