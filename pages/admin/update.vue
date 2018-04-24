<template>
  <div class="admin-update">
    <div class="update-info">
      <h4>개인정보 수정</h4>
      <input type="text" v-model="user.nickname">
      <input type="text" v-model="user.motto">
      <input type="text" v-model="user.email">
      <button @click="updateInfo">수정</button>
    </div>
    <div class="update-password">
      <h4>비밀번호</h4>
      <input type="password" v-model="oldPassword" placeholder="기존 암호">
      <input type="password" v-model="newPassword" placeholder="신규 암호">
      <input type="password" v-model="vertifyPassword" placeholder="암호 확인">
      <button @click="updatePassword">수정</button>
    </div>
    <top-tip ref="tip"/>
  </div>
</template>
<script>
  export default {
    middleware: 'auth',
    async asyncData({ store }) {
      let data = await store.dispatch('ADMIN_INFO')
      if (data.success) {
        return {
          user: data.data
        }
      } else {
        return {
          user: {}
        }
      }
    },
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        vertifyPassword: ''
      }
    },
    methods: {
      updateInfo() {
        this.$store.dispatch('UPDATE_ADMIN', this.user).then((data) => {
          if(data.success) {
            this.$refs.tip.openTip('수정되었습니다.')
          }
        })
      },
      updatePassword() {
        if (!this.oldPassword || !this.newPassword || !this.vertifyPassword) {
          return
        }
        if (this.newPassword !== this.vertifyPassword) {
          this.$refs.tip.openTip('암호가 동일하지 않습니다.')
          return
        }
        this.$store.dispatch('UPDATE_ADMIN', { oldPassword: this.oldPassword, newPassword: this.newPassword }).then((data) => {
          if(data.success) {
            this.$refs.tip.openTip('수정되었습니다.')
            // clear token
            this.$store.dispatch('LOGOUT').then(ret => {
              if(ret.success) {
                this.$store.state.token = ''
                this.$router.push('/')
              }
            })
          }
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '@/assets/css/vars.scss';
  .admin-update {
    max-width: 960px;
    margin: 60px auto;
    text-align: center;
    .update-info {
      margin-bottom: 30px;
    }
    input {
      display: block;
      width: 300px;
      margin: 20px auto;
    }
    button {
      border: none;
      line-height: 40px;
      width: 300px;
      background-color: $font-color;
      color: #fff;
      border-radius: 3px;
      font-size: 16px;
      &:hover {
        background-color: $font-color;
      }
    }
  }
</style>
