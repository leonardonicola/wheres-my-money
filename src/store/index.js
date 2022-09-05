import Vue from 'vue'
import Vuex from 'vuex'
import expenses from './modules/expenses'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card:{
      name:'Leonardo Nicola',
      number:'1239 1823',
      balance:2011,
    }
  },
  getters: {
    cardInfos(state){
      return state.card
    }
  },
  mutations:{
    addCardExpense(state, price){
      state.balance -= price
    }
  },
  actions:{
      checkAccount({commit}, {expense}){
          if( expense.account == 'creditcard'){
              commit('addCardExpense', expense.price)
          }
          commit('expenses/addExpense', {expense})
      }
  },
  modules: {expenses}
})
