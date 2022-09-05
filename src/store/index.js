import Vue from 'vue'
import Vuex from 'vuex'
import expenses from './modules/expenses'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card:{
      name:'Leonardo Nicola',
      number:'1239 1823',
      balance:2031,
    }
  },
  getters: {
    cardInfos(state){
      return state.card
    }
  },
  mutations:{
    addCardExpense(state, price){
      state.card.balance -= price
      localStorage.setItem('cardBalance', JSON.stringify(state.card.balance))
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
