import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

//eslint-disable-line
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [createPersistedState()]
});

export default store;
