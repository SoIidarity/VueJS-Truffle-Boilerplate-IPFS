<template>
  <div class="hello">
    <h1>Simple Storage Demo</h1>
      <el-button @click="deployContract">Deploy Contract</el-button>

  </div>
</template>

<script>
import createContractInstance from "../../utils/web3Service.js";

export default {
  name: "SimpleStorage",
  data() {
    return {
      sampleData: 0
    };
  },
  methods: {
    async deployContract() {
        const contract = await createContractInstance()
        console.log(contract)

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
