<template>
  <div>ID: {{$route.params.id}}</div>
</template>

<script>
  export default {
    name: "id",
    async asyncData ({ params}) {
      //let data = await axios.get('');
      //return {title: data.title};
      return {};
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
