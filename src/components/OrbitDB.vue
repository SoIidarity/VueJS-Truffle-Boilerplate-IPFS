<template>
    <div class="OrbitDB">
        <h1>OrbitDB implementation</h1>
        <input v-model="addValue" name="addValue" required class="input" type="number" min=0, max=100>
        <br>
        <el-button @click="add" class="button is-primary is-fullwidth subtitle">Add To Orbitdb</el-button>
        <br>
        <br>
        <el-button @click="get" class="button is-primary is-fullwidth subtitle">Get Value</el-button>
        <br>
        {{returnedValue}}
    </div>
</template>
<script>
    import {addValueToLog, getValuesFromLog} from "../../utils/OrbitDB.js";

    export default {
        name: "OrbitDB",
        data() {
            return {
                addValue: 0,
                returnedValue: 0
            };
        },
        methods: {
            async add() {
                const addValueAsync = await addValueToLog(this.$data.addValue)
            },
            async get() {
                const getValueAsync = await getValuesFromLog(5)
                this.$data.returnedValue = getValueAsync
            }
        }
    }
</script>