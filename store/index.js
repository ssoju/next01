import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import cookieparser from 'cookieparser'

import auth from './modules/auth'
import word from './modules/word'
import { mutations, state, actions, getters } from './common'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      word,
      auth
    },
    getters,
    mutations,
    state,
    actions: {
      ...actions,
      nuxtServerInit: ({commit}, {req}) => {
        let accessToken = null
        const parsed = cookieparser.parse(req.headers.cookie)
        if (parsed && parsed.auth) {
          accessToken = JSON.parse(parsed.auth)
        }
        //TODO commit('auth/update', accessToken)
      }
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}

export default createStore
