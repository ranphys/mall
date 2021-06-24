import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCounter(state, payload) {
            payload.count += 1
        },
        addToCart(state, payload) {
            state.cartList.push(payload)
        }
    },
    actions: {
        addCart(context, payload) {
            let product = context.state.cartList.find(item =>
                item.id === payload.id)
            if (product) {
                context.commit('addCounter', product)
            } else {
                payload.checked = true
                payload.count = 1
                context.commit('addToCart', payload)
            }
        }
    },
    getters: {
        cartLength(state) {
            return state.cartList.length
        },
        cartList(state) {
            return state.cartList
        }
    }

})