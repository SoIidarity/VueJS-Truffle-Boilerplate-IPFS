import web3 from './web3Service'
import contract from 'truffle-contract'
import contractJSON from '../build/contracts/SimpleStorage.json'
const Contract = contract(contractJSON)
if (typeof web3 !== 'undefined') {
    Contract.setProvider(web3.currentProvider)
}
const createSimpleStorageInstance = async (c) => {
    const newContract = await Contract.new(c.startingValue, {
        from: c.from,
        gasPrice: 2000000000,
        gas: '2000000'
    })
    return newContract
}

const loadSimpleStorageContract = async (c) => {
    const deployedContract = await Contract.at(c)
    return deployedContract
}

const getSimpleStorageValue = async (c) => {
    return c.get()
}

const setSimpleStorageValue = async (c) => {
    const transaction = c.contract.set(c.value, {
        from: c.from,
        gasPrice: 2000000000,
        gas: '2000000'
    })
    return transaction
}

export {
    createSimpleStorageInstance,
    loadSimpleStorageContract,
    getSimpleStorageValue,
    setSimpleStorageValue
}