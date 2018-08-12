import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueForm from 'vue-form'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

import {
  getNetIdString,
  getEthWallets,
  getWalletBalance
} from '../utils/web3Service.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueForm)

setInterval(function () {
  (async () => {
    try {
      const ethWallets = await getEthWallets()
      if (store.state.defaultEthWallet != ethWallets[0]) {
        store.commit('setDefaultEthWallet', ethWallets[0])
      }
      const walletBalance = await getWalletBalance()
      if (store.state.walletBalance != walletBalance) {
        store.commit('setWalletBalance', walletBalance)
      }
      
      const netIdString = await getNetIdString()
      if (store.state.netIdString != netIdString) {
        store.commit('setNetworkId', netIdString)
      }
      
    } catch (e) {
      console.log(e)
    }
  })()
}, 1000);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')