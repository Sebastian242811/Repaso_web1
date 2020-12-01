// auth-company.module.js
// Vuex Authentication Module
import AuthDealerService from '../services/security/dealer/auth-dealer.service';

const dealer = JSON.parse(localStorage.getItem('dealer'));

const initialState = dealer
? { status: { loggedIn: true }, dealer }
: { status: { loggedIn: false }, dealer: null };

export const authDealer = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, dealer) {
            return AuthDealerService.login(dealer).then(
                dealer => {
                    commit('loginSuccess', dealer);
                    return Promise.resolve(dealer);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                });
        },
        logout({ commit }) {
            AuthDealerService.logout();
            commit('logout');
        },
        register({ commit }, dealer) {
            return AuthDealerService.register(dealer).then(
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
        loginSuccess(state, dealer) {
            state.status.loggedIn = true;
            state.dealer = dealer;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.dealer = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.dealer = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
