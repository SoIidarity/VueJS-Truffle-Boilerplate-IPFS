<template>
    <div class="OrbitDB">
        <h1>IPFS Implementation</h1>
        <el-button @click="add" class="button is-primary is-fullwidth subtitle">Add To IPFS</el-button>
    
    </div>
</template>
<script>
    // import {createDB, loadDB, addValueToLog, getValuesFromLog} from "../../utils/OrbitDB.js";
    import {uploadFile, viewFile} from "../../utils/IPFSUploader"

    export default {
        name: "IPFS",
        data() {
            return {
            };
        },
        methods: {
            async add() {
                await uploadFile()
            },
        }
    }
</script>