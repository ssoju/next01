<template>
  <div>
    <h2 class="text-center">Login {{$t('home.title')}}</h2>
    <div>
      <form @submit.prevent="postLogin">
        <div><label>email: <input :value="email" placeholder="enter email" ref="email"></label></div>
        <div><label>password: <input :value="password" placeholder="enter password" ref="password"></label></div>
        <div><button>Login</button></div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "login",
    middleware: "notAuth",

    data: () => {
      return {
        email: 'comahead@gmail.com',
        password: 'qazx1234',
        error: null
      };
    },

    methods: {
      postLogin() {
        axios.post('auth/login', {
          email: this.email,
          password: this.password
        }).then(() => {
          console.log('success sign in');
          this.$router.push('/')
        }).catch((e) => {
          this.error = e;
        });
      }
    }
  }
</script>

<style scoped>

</style>
