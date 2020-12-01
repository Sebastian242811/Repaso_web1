// auth-company.module.js
// Vuex Authentication Module
import AuthCustomerService from '../services/security/customer/auth-customer.service';

const customer = JSON.parse(localStorage.getItem('customer'));

const initialState = customer
? { status: { loggedIn: true }, customer }
: { status: { loggedIn: false }, customer: null };

export const authCustomer = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, customer) {
            return AuthCustomerService.login(customer).then(
                customer => {
                    commit('loginSuccess', customer);
                    return Promise.resolve(customer);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                });
        },
        logout({ commit }) {
            AuthCustomerService.logout();
            commit('logout');
        },
        register({ commit }, customer) {
            return AuthCustomerService.register(customer).then(
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
        loginSuccess(state, customer) {
            state.status.loggedIn = true;
            state.customer = customer;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.customer = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.customer = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}
