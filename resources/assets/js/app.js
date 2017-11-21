
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

import Form from './core/Form';

const app = new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        }),
    },

    methods: {
        onSubmit() {
            this.form.submit('post', '/projects/store');
        }
    }
});

let store = {
    user: {
        name: 'Ruslan Steiger'
    }
};

new Vue({
    el: '#one',

    data: {
        shared: store,
        foo: 'bar'
    }
});

new Vue({
    el: '#two',

    data: {
        shared: store,
        foo: 'biz'
    }
});