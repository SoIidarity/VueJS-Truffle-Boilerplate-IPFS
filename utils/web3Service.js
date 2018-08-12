import Web3 from 'web3'
import store from '../src/store'

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

const NETWORKS = {
    '1': 'Main Net',
    '2': 'Deprecated Morden test network',
    '3': 'Ropsten test network',
    '4': 'Rinkeby test network',
    '42': 'Kovan test network'
}

const getNetIdString = async () => {
    const id = await web3.eth.net.getId()
    if (typeof id === 'number') {
        return NETWORKS[id] || 'Truffle Test Network'
    } else {
        return ''
    }
}

const getWalletBalance = async () => {
    const walletBalance = await web3.eth.getBalance(store.state.defaultEthWallet)
    return walletBalance
}

const getEthWallets = () =>
    new Promise((resolve, reject) => {
        web3.eth.getAccounts((err, res) => {
            if (!err) return resolve(res)
            reject(err)
        })
    })

export {
    getEthWallets,
    getWalletBalance,
    getNetIdString,
}