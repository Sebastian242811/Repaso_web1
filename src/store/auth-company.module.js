// auth-company.module.js
// Vuex Authentication Module
import AuthCompanyService from '../services/security/company/auth-company.service';

const company = JSON.parse(localStorage.getItem('company'));

const initialState = company
? { status: { loggedIn: true }, company }
: { status: { loggedIn: false }, company: null };

export const authCompany = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, company) {
            return AuthCompanyService.login(company).then(
                company => {
                    commit('loginSuccess', company);
                    return Promise.resolve(company);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                });
        },
        logout({ commit }) {
            AuthCompanyService.logout();
            commit('logout');
        },
        register({ commit }, company) {
            return AuthCompanyService.register(company).then(
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
        loginSuccess(state, company) {
            state.status.loggedIn = true;
            state.company = company;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.company = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.company = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
