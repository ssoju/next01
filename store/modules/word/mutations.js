import Vue from 'vue';
import {
    LIST,
    GET
} from './mutation-types';

export default {
    [LIST](state, result) {
        if (state.page === 1) {
            state.list = [];
        }

        state.page = state.page + 1;
        state.loadedAll = result.page >= result.totalPage;
        state.list = state.list.concat(result.data);
    },

    [GET](state, data) {

    }
};
