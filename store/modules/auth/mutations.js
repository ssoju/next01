import Vue from 'vue';
import {
    CHECK,
    REGISTER,
    LOGIN,
    LOGOUT,
} from './mutation-types';
//import JwtService from '@/services/jwt.service';

export default {
    [CHECK](state, payload) {
        console.log('aa');
        state.authenticated = !!Vue.auth.token();
    },

    [REGISTER](state, data) {
    },

    [LOGIN](state, data) {
        state.authenticated = true;
    },

    [LOGOUT](state) {
        state.authenticated = false;
    },
};
