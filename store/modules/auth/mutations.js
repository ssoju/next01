import Vue from 'vue';
import {
  CHECK,
  REGISTER,
  LOGIN,
  LOGOUT, SET_USER,
} from './mutation-types'
//import JwtService from '@/services/jwt.service';

export default {
    [CHECK](state, payload) {
        state.authenticated = !!Vue.auth.token();
    },

    [SET_USER](state, payload) {
        state.user = payload || null
    },

    [REGISTER](state, data) {

    },

    [LOGIN](state, data) {
        state.authenticated = true;
    },

    [LOGOUT](state) {
        state.authenticated = false;
        state.user = null;
    },
};
