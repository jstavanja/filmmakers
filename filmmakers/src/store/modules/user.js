const state = {
    loggedIn: false,
    username: '',
    fullName: ''
};

const getters = {
    isLoggedIn: state => state.loggedIn,
    username: state => state.username,
    fullName: state => state.fullName
};

const actions = {
    userLogIn ({commit, state}, payload) {
        commit('USER_LOG_IN', payload);
    }
}

const mutations = {
    'USER_LOG_IN' (state, payload) {
        // TODO: Implement firebase auth logic
        state.loggedIn = true;
        state.username = payload.username;
        state.fullName = payload.fullName;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}