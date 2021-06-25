import { reject, resolve } from 'core-js/fn/promise'
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
            return new Promise((resolve, reject) => {
                let product = context.state.cartList.find(item =>
                    item.id === payload.id)
                if (product) {
                    context.commit('addCounter', product)
                    resolve('当前商品数量+1')
                } else {
                    payload.checked = true
                    payload.count = 1
                    context.commit('addToCart', payload)
                    resolve('添加了新的商品')
                }
            })
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