<template>
  <div class="hello">
    <h1>Simple Storage Demo</h1>
    <label class="label">Starting Value</label>
    
    <input v-model="contract.startingValue" name="startingValue" required class="input" type="number" min=0, max=100>
    <br>    
    <el-button @click="deployContract" class="button is-primary is-fullwidth subtitle">Store Value</el-button>
        
    



  </div>
</template>

<script>
import createContractInstance from "../../utils/web3Service.js";

export default {
  name: "SimpleStorage",
  data() {
    return {
      sampleData: 0,
      contract: {
          startingValue:0,
          from: this.$store.state.defaultEthWallet
      }
    };
  },
  methods: {
    async deployContract() {
        console.log("button")
      const contract = await createContractInstance(this.$data.contract);
      console.log(contract);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
