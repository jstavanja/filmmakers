const state = {
    loggedIn: false,
    email: '',
    fullName: ''
};

const getters = {
    loggedIn: state => state.loggedIn,
    email: state => state.email,
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
        state.email = payload.email;
        state.fullName = payload.fullName;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}