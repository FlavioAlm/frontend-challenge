import axios from 'axios'

import { getToken } from 'utils'

class SomosClient {
  //onError = error => {}
  constructor() {
    this.token = getToken()
  }


  // axios.get(url, data, config)
  // ns = async foo(arg) => { func(), return }
  search = async query => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/search?q=${query}&type=artist`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      }, 
    )
    return data
  }






}

export default SomosClient

    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/