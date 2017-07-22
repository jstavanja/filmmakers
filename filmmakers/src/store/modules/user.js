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
    userLogIn ({commit}, payload) {
        commit('USER_LOG_IN', payload);
    },
    userLogOut ({commit}) {
        commit('USER_LOG_OUT');
    }
}

const mutations = {
    'USER_LOG_IN' (state, payload) {
        // TODO: Implement firebase auth logic
        state.loggedIn = true;
        state.email = payload.email;
        state.fullName = payload.fullName;
    },
    'USER_LOG_OUT' (state) {
        state.loggedIn = false;
        state.email = null;
        state.fullName = null;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}