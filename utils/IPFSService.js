//using the infura.io node, otherwise ipfs requires you to run a //daemon on your own computer/server.
const IPFS = require('ipfs')
import store from '../src/store'

// const ipfs = new IPFS({
//     // repo: '/orbitdb/examples/browser/new/ipfs/0vcd .27.3',
//     // start: true,
//     EXPERIMENTAL: {
//         pubsub: true,
//     },
//     config: {
//         Addresses: {
//             Swarm: [
//                 // Use IPFS dev signal server
//                 // '/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star',
//                 '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
//                 // Use local signal server
//                 // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
//             ]
//         },
//     }
// })







const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});
//run with local daemon
// const ipfsApi = require(‘ipfs-api’);
// const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});


ipfs.on('ready', async () => {
    const version = await ipfs.version()
    console.log('IPFS Connected! Version:', version.version)
    store.commit('setIPFSNetworkState', true)
})


export default {ipfs};