import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import cookieparser from 'cookieparser'

import auth from './modules/auth'
import blog from './modules/blog'
import {mutations, state, actions, getters} from './common'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      auth
    },
    getters,
    mutations,
    state,
    actions: {
      ...actions,
      async nuxtServerInit({commit, dispatch}, {req}) {
        if (req.headers.cookie) {
          let accessToken = null
          const parsed = cookieparser.parse(req.headers.cookie)
          if (parsed && parsed.token) {
            accessToken = JSON.parse(parsed.token)
          }
          commit('auth/SET_TOKEN', accessToken)
        }

        //const {user} = await axios.get('/auth/user')
        let user = await dispatch('auth/GET_USER')
        commit('auth/SET_USER', user)
      }
    },
    strict: true,
    plugins: []//debug ? [createLogger()] : []
  })
}

export default createStore
