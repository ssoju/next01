import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8000}`
}
export default ({ app, store }) => {
  axios.create(options)
  app.axios = axios;
}
