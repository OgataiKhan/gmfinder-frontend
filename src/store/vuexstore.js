import { createStore } from 'vuex';
//vuex-persistedstate is a plugin that automatically saves part or all of the Vuex state to localStorage so it can be restored after the page reloads.
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    // Plugins are optional extras that can add functionality to the Vuex store.
    plugins: [createPersistedState({
        // Specify which parts of the state should be persisted.
        paths: ['searchParams'],
    })],
    // The state is an object that contains all the application data, much like the data in the store
    state: {
        searchParams: {
            page: null,
            selectedGame: null,
        },
    },
    //Mutations are the only way to directly change (or mutate) the state in Vuex. The setSearchParams mutation takes the new page and selectedGame values and updates the state accordingly
    mutations: {
        setSearchParams(state, { page, selectedGame }) {
            state.searchParams.page = page;
            state.searchParams.selectedGame = selectedGame;
        },
    },
    // Actions are used to perform asynchronous operations, such as fetching data from an API, and then commit mutations to update the state.
    actions: {
        updateSearchParams({ commit }, params) {
            commit('setSearchParams', params);
        },
    },
});
