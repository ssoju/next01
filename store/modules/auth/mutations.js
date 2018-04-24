import Vue from 'vue';
import * as type from './mutation-types'
//import JwtService from '@/services/jwt.service';

export default {
    [type.CHECK](state, payload) {
        state.authenticated = !!Vue.auth.token()
    },

    [type.SET_USER](state, payload) {
        state.user = payload || null
    },

    [type.SET_TOKEN](state, payload) {
        state.token = payload
    },

    [type.REGISTER](state, data) {

    },

    [type.LOGIN](state, data) {
        state.authenticated = true
        state.token = data.token;
    },

    [type.LOGOUT](state) {
        state.authenticated = false
        state.user = null;
        state.token = null;
    },
};
