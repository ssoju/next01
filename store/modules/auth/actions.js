import Vue from 'vue';
import * as types from './mutation-types';

export const check = (store) => { // ({commit}) => commit(...)
    store.commit(types.CHECK);
};

export const register = ({commit}, payload) => {
    Vue.auth
        .register({
            data: {...payload}
        })
        .then((response) => {
            commit(types.REGISTER, response.data); // mutation 메소드 호출
            Vue.router.push({
                name: 'home.index'
            });
        });
};

export const login = ({commit}, payload) => {
    Vue.auth
        .login({
            data: {
                ...payload
            },
            rememberMe: true
        })
        .then((response) => {
            commit(types.LOGIN, {
                token: response.data.token
            }); // mutation 메소드 호출

            Vue.router.push({
                name: 'home.index'
            });
        }).catch((a, b, c) => {
        console.error(a, b, c);
    });
};


export const logout = ({commit}) => {
    Vue.auth
        .logout()
        .then(() => {
            commit(types.LOGOUT); // mutation 메소드 호출

            Vue.router.push({
                name: 'login.index',
            });
        });
};


export default {
    check,
    register,
    login,
    logout,
};
