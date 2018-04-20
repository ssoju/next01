<template>
    <div>
        <p>Categiry</p>
        <nuxt-child/>
    </div>
</template>

<script>
    export default {
        name: 'category',
        middleware: 'auth',
        created() {
            console.dir(this.$route.params)
        }
    }
</script>

<style scoped>

</style>
