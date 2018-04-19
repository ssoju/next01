import Vue from 'vue';
import * as types from './mutation-types';

export const list = ({commit}, payload) => {
    Vue.axios.get('words', {
        params: {
            page: payload.page,
            keyword: payload.keyword || ''
        }
    }).then((res) => {
        if (res.data.success) {
            commit(types.LIST, res.data);
        }
    });
};

export const get = ({commit}, payload) => {
    Vue.axios.get('words/' + payload.id).then((res) => {
        if (res.data.success) {
            commit(types.GET, res.data);
        }
    });
};

export default {
    list,
    get
};
