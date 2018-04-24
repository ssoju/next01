import * as axios from 'axios'

let options = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8000}`
} else {
  /*if (localStorage.getItem('jwt_token')) {
    Object.assign(options.headers, {
      'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
    })
  }*/
}

export default ({ app, store }) => {

  console.log('111', app, store)
  axios.interceptors.request.use(function (config) {
    /**const token = (store && store.auth && store.auth.token) || ''

    if (token) {
      Object.assign(config.headers, {
        'Authorization': 'Bearer ' + token
      })
    }**/

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.create(options)
  app.axios = axios;

  return axios;
}
