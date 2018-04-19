<template>
    <div>
        <p>Login</p>
    </div>
</template>

<script>
    import Cookie from 'js-cookie'

    export default {
        name: "login",
        middleware: "notAuthenticated",

        methods: {
            postLogin () {
                setTimeout(() => {
                    const auth = {
                        accessToken: ''
                    }

                    Cookie.set('auth', auth)
                    localStorage.setItem('id_token', auth.accessToken)

                    this.$store.commit('auth/update', auth)
                    this.$router.push('/')
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>