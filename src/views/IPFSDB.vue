<template>
    <div class="IPFSDB">
        <OrbitDB/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import OrbitDB from '@/components/OrbitDB.vue'

    export default {
        name: 'IPFSDB',
        components: {
            OrbitDB
        }
    }
</script>
