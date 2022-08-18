import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    health:{
      historic:[],
      budget:200
    },
    essentials:{
      historic:[],
      budget:200
    },
    entertainment:{
      budget:300,
      historic:[
        {
          price: 1200, name:'Cineminha'
        },
      ]
    },
    card:{
      name:'Leonardo Nicola',
      number:'1239 1823',
      balance:2013,
    },
    walletBalance:20301,
    overallHistoric:[]
  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
