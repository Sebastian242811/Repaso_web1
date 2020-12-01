// auth-company.module.js
// Vuex Authentication Module
import AuthDispatcherService from '../services/security/dispatcher/auth-dispatcher.service';

const dispatcher = JSON.parse(localStorage.getItem('dispatcher'));

const initialState = dispatcher
? { status: { loggedIn: true }, dispatcher }
: { status: { loggedIn: false }, dispatcher: null };

export const authDispatcher = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, dispatcher) {
            return AuthDispatcherService.login(dispatcher).then(
                dispatcher => {
                    commit('loginSuccess', dispatcher);
                    return Promise.resolve(dispatcher);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                });
        },
        logout({ commit }) {
            AuthDispatcherService.logout();
            commit('logout');
        },
        register({ commit }, dispatcher) {
            return AuthDispatcherService.register(dispatcher).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                });
        }
    },
    mutations: {
        loginSuccess(state, dispatcher) {
            state.status.loggedIn = true;
            state.dispatcher = dispatcher;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.dispatcher = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.dispatcher = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
