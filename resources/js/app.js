require('./bootstrap');

window.Vue = require('vue');

Vue.component('budget-component', require('./components/Budget.vue').default);
Vue.component('form-budget-component', require('./components/FormBudget.vue').default);
Vue.component('my-budgets-component', require('./components/MyBudgets.vue').default);

const app = new Vue({
    el: '#app',
});
