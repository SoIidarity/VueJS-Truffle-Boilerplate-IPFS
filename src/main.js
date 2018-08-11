import Vue from 'vue'
import App from './App.vue'
import VueForm from 'vue-form'
import router from './router'
import store from './store'

import {
  getNetIdString,
  getEthWallets
} from '../utils/web3Service.js'


Vue.config.productionTip = false
Vue.use(VueForm)

setInterval(function () {
  (async () => {
    try {
      const ethWallets = await getEthWallets()
      const netIdString = await getNetIdString()
      if (store.state.defaultEthWallet != ethWallets[0]) {
        store.commit('setDefaultEthWallet', ethWallets[0])
      }
      if (store.state.netIdString != netIdString) {
        store.commit('setNetworkId', netIdString)
      }
      
    } catch (e) {
      console.log(e)
    }
    console.log("Called")
  })()
}, 1000);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')