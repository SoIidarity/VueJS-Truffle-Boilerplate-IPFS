<template>
    <div class="OrbitDB">
        <h1>OrbitDB implementation</h1>
        <el-button @click="test" class="button is-primary is-fullwidth subtitle">Run Orbitdb</el-button>
    </div>
</template>
<script>
    import {value} from "../../utils/OrbitDB.js";

    export default {
        name: "OrbitDB",
        data() {
            return {};
        },
        methods: {
            test() {
            console.log(value)
            }
        }
    }
</script>