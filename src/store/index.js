import Vue from 'vue'
import Vuex from 'vuex'
import expenses from './modules/expenses'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: {
      name: 'Leonardo Nicola',
      number: '1239 1823',
      balance: 2031,
    },
    viewer: { id: 2 },
  },
  getters: {
    cardInfos(state) {
      return state.card
    },
  },
  mutations: {
    addCardExpense(state, price) {
      state.card.balance -= price
      localStorage.setItem('cardBalance', JSON.stringify(state.card.balance))
    },
    addFundsToCard(state, value) {
      state.card.balance += value
      localStorage.setItem('cardBalance', JSON.stringify(state.card.balance))
    },
    changeViewerId(state, id) {
      state.viewer.id = id
    },
  },
  actions: {
    checkAccount({ commit }, { expOrFund }) {
      console.log(expOrFund.value)
      console.log(expOrFund.price)
      //If the expense object return a value, it's from a add funds function
      //If the expense object return a price, it's from a add expense function
      if (expOrFund.value) {
        expOrFund.account == 'debitcard'
          ? commit('addFundsToCard', expOrFund.value)
          : commit('expenses/addFundsToWallet', expOrFund.value)
      } else if (expOrFund.price) {
        expOrFund.account == 'debitcard'
          ? commit('addCardExpense', expOrFund.price)
          : null
        commit('expenses/addExpense', { expense: expOrFund })
      }
    },
  },
  modules: { expenses },
})
