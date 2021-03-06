import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'

Vue.use(axios);

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyByhzU1ebU-hXEzaG0Zl8kJYkSa1rtAYbk",
        libraries: "places" // necessary for places input
    }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
