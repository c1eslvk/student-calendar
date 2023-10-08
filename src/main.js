import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyC3EV6XwROlnSkf4BTuUhTUj3aQ7vWtZDs",
  authDomain: "student-calendar-45464.firebaseapp.com",
  projectId: "student-calendar-45464",
  storageBucket: "student-calendar-45464.appspot.com",
  messagingSenderId: "317224788268",
  appId: "1:317224788268:web:08de6b6bf9e25d38008c89"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
