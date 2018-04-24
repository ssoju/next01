//import axios from '@/plugins/axios'
import Vue from 'vue'
import * as types from './mutation-types'

const axios = Vue.axios

export const CHECK = (store) => { // ({commit}) => commit(...)
    store.commit(types.CHECK);
};

export const REGISTER = ({commit}, payload) => {
    axios.post(`auth/register`, {
            data: {...payload}
        })
        .then((response) => {
            commit(types.REGISTER, response.data); // mutation 메소드 호출
        });
};

export const LOGIN = ({commit}, payload) => {
    axios.post(`auth/login`, {
            data: {
                ...payload
            }
        })
        .then((response) => {
            commit(types.LOGIN, {
                token: response.data.token
            }); // mutation 메소드 호출
        }).catch((a, b, c) => {
        console.error(a, b, c);
    });
};


export const LOGOUT = ({commit}) => {
    axios.post(`auth/logout`)
        .then(() => {
            commit(types.LOGOUT); // mutation 메소드 호출
        });
};


export default {
    CHECK,
    REGISTER,
    LOGIN,
    LOGOUT,
};
