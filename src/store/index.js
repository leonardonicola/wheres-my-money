import Vue from 'vue'
import Vuex from 'vuex'
import expenses from './modules/expenses'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card:{
      name:'Leonardo Nicola',
      number:'1239 1823',
      balance:2013,
    },
    walletBalance:20301
  },
  getters: {
    cardInfos(state){
      return state.card
    },
    walletFunds(state){
      return state.walletBalance
    }
  },
  modules: {expenses}
})
