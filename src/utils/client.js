import axios from 'axios'

import { getToken } from 'utils'

const PATH_BASE = process.env.REACT_APP_API_URL
const PATH_SEARCH = '/search'
const PATH_ARTISTS = '/artists'
const PATH_ALBUMS = '/albums'
const PARAM_SEARCH = 'q='
const PARAM_TYPE= 'type='
const PARAM_LIMIT= 'limit='

const DEFAULT_TYPE = 'artist'
const DEFAULT_LIMIT = 10;

class SomosClient {
  constructor() {
    this.token = getToken()
    this.headers = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`
      }
    }
  }

  search = async query => {
    const { data } = await axios.get(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${query}&${PARAM_TYPE}${DEFAULT_TYPE}&${PARAM_LIMIT}${DEFAULT_LIMIT}`,
      this.headers, 
    )
    return data
  }

  getArtist = async id => {
    const { data } = await axios.get(
      `${PATH_BASE}${PATH_ARTISTS}/${id}`,
      this.headers, 
    )
    return data
  }

  getArtistAlbums = async id => {
    const { data } = await axios.get(
      `${PATH_BASE}${PATH_ARTISTS}/${id}${PATH_ALBUMS}`,
      this.headers, 
    )
    return data
  }

}

export default SomosClient

  // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
  // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/