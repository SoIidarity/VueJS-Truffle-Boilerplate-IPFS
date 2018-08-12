import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    netIdString: '',
    walletBalance: '',
    defaultEthWallet: ''
  },
  getters: {},
  mutations: {
    setNetworkId(state, netIdString) {
      state.netIdString = netIdString
    },
    setDefaultEthWallet(state, walletAddress) {
      state.defaultEthWallet = walletAddress
    },
    setWalletBalance(state, walletBalance){
      state.walletBalance = walletBalance
    }
  },
  actions: {}
})

export default store