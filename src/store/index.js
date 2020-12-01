// index.js
// Vuex Container Store
import Vue from 'vue';
import Vuex from 'vuex';
import { authCompany } from "@/store/auth-company.module";
import { authCustomer } from "@/store/auth-customer.module";
import { authDealer } from "@/store/auth-dealer.module";
import { authDispatcher } from "@/store/auth-dispatcher.module";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authCompany,
        authCustomer,
        authDealer,
        authDispatcher
    }
});
