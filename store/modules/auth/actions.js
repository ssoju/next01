import axios from '~/plugins/axios'
import * as types from './mutation-types'

export const CHECK = (store) => { // ({commit}) => commit(...)
  store.commit(types.CHECK)
}

export const REGISTER = async ({commit}, payload) => {
  let response = await axios.post(`auth/register`, {
    data: {...payload}
  })
  commit(types.REGISTER, response.data) // mutation 메소드 호출
  return response
}

export const LOGIN = async ({commit}, payload) => {
  let response = await axios.post(`auth/login`, {
    data: {
      ...payload
    }
  })

  commit(types.LOGIN, {
    token: response.data.token
  }) // mutation 메소드 호출

  return response
}


export const LOGOUT = async ({commit}) => {
  let response = await axios.post(`auth/logout`)
  commit(types.LOGOUT) // mutation 메소드 호출
  return response
}

export const GET_USER = async ({commit}) => {
  let response = await axios.get('auth/user')
  commit(types.SET_USER, response.data)
  return response
}


export default {
  CHECK,
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_USER
}
