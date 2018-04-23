<template>
  <div class="blog">
    <div class="header-wrapper">
      <header class="blog-header">
        <h1 class="header-title"><a href="/">{{ user.nickname }}</a></h1>
        <nav class="header-nav">
          <ul class="nav-list" v-if="user.role === 1">
            <li v-for="(nav, index) in adminNavs" :key="index" :class="{'nav-active': nav.routerName === $route.name}">
              <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
            </li>
            <li><a @click="logout">logout</a></li>
          </ul>
          <ul class="nav-list" v-else>
            <li v-for="(nav, index) in navs" :key="index" :class="{'nav-active': nav.routerName === $route.name}">
              <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <section class="blog-body">
      <nuxt/>
    </section>
    <aside class="blog-aside">
      <a href="#" class="aside-backtop">
        <i class="iconfont icon-backtop"></i>
      </a>
    </aside>
    <footer class="blog-footer">
      <p>Powered by <a href="https://github.com/ssoju">Ssoju</a></p>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        keyword: '',
        navs: [{
          path: '/',
          routerName: 'index',
          name: 'root'
        }, {
          path: '/tags',
          routerName: 'tags-id',
          name: 'tags'
        }, {
          path: '/archives',
          routerName: 'archives',
          name: 'arch0'
        }, {
          path: '/search',
          routerName: 'search-id',
          name: 'search'
        }],
        adminNavs: [{
          path: '/admin/private',
          routerName: 'admin-private',
          name: 'adminprivate'
        }, {
          path: '/admin/tags',
          routerName: 'admin-tags',
          name: 'admintags'
        }, {
          path: '/admin/update',
          routerName: 'admin-update',
          name: 'adminupdate'
        }]
      }
    },
    computed: {
      user() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      search() {
        if (this.keyword === '') {
          return
        } else {
          let keyword = encodeURIComponent(this.keyword)
          this.$router.push(`/search/${keyword}`)
        }
      },
      logout() {
        this.$store.dispatch('auth/logout').then(data => {
          if (data.success) {
            this.$store.state.token = ''
            this.$router.push('/')
          }
        })
      }
    }
  }
</script>
<style>


</style>
