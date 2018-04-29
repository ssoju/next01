import axios from '~/plugins/axios'
import * as types from './mutation-types'

export const CREATE_TAG = async ({commit}, params) => {
  const {data} = await axios.post(`tag`, params)
  return data
}

export const DELETE_TAG = async ({commit}, params) => {
  const {data} = await axios.delete(`tag`, params)
  return data
}

export const UPDATE_TAG = async ({commit}, params) => {
  const {data} = await axios.patch(`tag`, params)
  return data
}

export const TAGS = async ({commit}, id = '') => {
  const {data} = await axios.get(`tags/${id}`)
  return data
}

export const SEARCH = async ({commit, state, getters}, id = '') => {
  const {data} = await axios.get(`search/${id}`)
  return data
}

export const ARTICLES = async ({commit}, page = 1, limit = 15) => {
  const {data} = await axios.get(`articles/${page}/${limit}`)
  return data
}

export const PRIVATE_ARTICLES = async ({commit}) => {
  const {data} = await axios.get(`private-articles`)
  return data
}

export const CREATE_ARTICLE = async ({commit}, params) => {
  const {data} = await axios.post(`article`, params)
  return data
}

export const DELETE_ARTICLE = async ({commit}, id) => {
  const {data} = await axios.delete(`article/${id}`)
  return data
}

export const UPDATE_ARTICLE = async ({commit}, params) => {
  const {data} = await axios.patch(`article`, params)
  return data
}

export const ARTICLE_DETAIL = async ({commit}, id) => {
  const {data} = await axios.get(`article/${id}`)
  return data
}

export const ARCHIVES = async ({commit}) => {
  const {data} = await axios.get(`archives`)
  return data
}

export const ADMIN_INFO = async ({commit}) => {
  const {data} = await axios.get(`user`)
  return data
}

export const UPDATE_ADMIN = async ({commit}, params) => {
  const {data} = await axios.patch(`user`, params)
  return data
}

export default {
  CREATE_TAG,
  DELETE_TAG,
  UPDATE_TAG,
  TAGS,
  SEARCH,
  ARTICLES,
  PRIVATE_ARTICLES,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
  ARTICLE_DETAIL,
  ARCHIVES,
  ADMIN_INFO,
  UPDATE_ADMIN
}
