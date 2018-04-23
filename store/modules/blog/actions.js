import Vue from 'vue'
import axios from 'axios'
import * as types from './mutation-types'

export const tags = async ({commit}, id = '') => {
    const { data } = await axios.get(`tags/${id}`);
    return data
};

export const search = async ({ commit, state, getters}, id = '') => {
  const { data } = await axios.get(`search/${id}`)
  return data
}



export default {
    list,
    get
};
