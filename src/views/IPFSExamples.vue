<template>
    <div class="IPFS">
        <OrbitDB/>
        <br>
        <IPFS>
    </div>
</template>

<script>
    // @ is an alias to /src
    import OrbitDB from '@/components/OrbitDB.vue'
    import IPFS from '@/components/IPFS.vue'

    export default {
        name: 'IPFS',
        components: {
            OrbitDB,
            IPFS
        }
    }
</script>
