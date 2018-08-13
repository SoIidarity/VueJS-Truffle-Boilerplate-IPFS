const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
import store from '../src/store'

// OrbitDB uses Pubsub which is an experimental feature
// and need to be turned on manually.
// Note that these options need to be passed to IPFS in
// all examples in this document even if not specfied so.
const ipfsOptions = {
    EXPERIMENTAL: {
        pubsub: true
    }
}

// Create IPFS instance
const ipfs = new IPFS(ipfsOptions)

ipfs.on('ready', async () => {
    const orbitdb = new OrbitDB(ipfs)
    const db = await orbitdb.keyvalue('first-database')
    console.log(db.address.toString())
    await db.put('name', 'hello')
    const value = db.get('name')
    console.log(value)
})

const value = 5
export {value}