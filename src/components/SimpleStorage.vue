<template>
  <div class="hello">
      Wallet Address: {{this.$store.state.defaultEthWallet}}
      <br>
      Network Name: {{this.$store.state.netIdString}} 
      <br>
      Wallet Balance: {{this.$store.state.walletBalance}} 
    <h1>Simple Storage Demo</h1>
    <label class="label">Starting Value</label>
    <input v-model="contract.startingValue" name="startingValue" required class="input" type="number" min=0, max=100>
    <br>    
    <el-button type="submit" @click="deployContract" class="button is-primary is-fullwidth subtitle">Store Value</el-button>
  </div>
</template>

<script>
import {createContractInstance, getNetIdString} from "../../utils/web3Service.js";

export default {
  name: "SimpleStorage",
  data() {
    return {
      sampleData: 0,
      contract: {
          startingValue:0,
          from: ''
      }
    };
  },
  methods: {
    async deployContract() {
        //set the from the current EthWallet
      this.$data.contract.from = this.$store.state.defaultEthWallet
      const contract = await createContractInstance(this.$data.contract);
      console.log(contract);
    }
  }
};
</script>

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
