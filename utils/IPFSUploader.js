import ipfs from './IPFSService'

const uploadFile = async (c) => {
    const filesAdded = await ipfs.files.add({
        path: 'hello.txt',
        content: Buffer.from('Hello World 101')
    })

    console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)
}

const viewFile = async (c) => {
    const fileBuffer = await ipfs.files.cat(filesAdded[0].hash)
    console.log('Added file contents:', fileBuffer.toString())
}

export {
    uploadFile,
    viewFile
}