import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [createPersistedState({
        paths: ['searchParams'], // Specify only the parts of the state you want to persist
    })],
    state: {
        searchParams: {
            page: null,
            selectedGame: null,
        },
    },
    mutations: {
        setSearchParams(state, { page, selectedGame }) {
            state.searchParams.page = page;
            state.searchParams.selectedGame = selectedGame;
        },
    },
    actions: {
        updateSearchParams({ commit }, params) {
            commit('setSearchParams', params);
        },
    },
});
