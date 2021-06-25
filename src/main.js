import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import toast from './components/common/Toast/toast.js'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyload, {
    loading: require('./assets/img/common/placeholder.png')
})
=======

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')