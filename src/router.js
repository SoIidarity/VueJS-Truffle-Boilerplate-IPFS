import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EthereumContracts from './views/EthereumContracts.vue'
import IPFSDB from './views/IPFSDB.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/EthereumContracts',
            name: 'EthereumContracts',
            component: EthereumContracts
        },
        {
            path: '/IPFSDB',
            name: 'IPFSDB',
            component: IPFSDB
        },
    ]
})
