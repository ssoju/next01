<template>
  <div class="blog">
    <div class="header-wrapper">
      <header class="blog-header">
        <h1 class="header-title"><a href="/" v-if="user">{{ user.nickname }}</a></h1>
        <nav class="header-nav">
          <ul class="nav-list" v-if="user && user.role === 1">
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
          name: '홈으로'
        }, {
          path: '/tags',
          routerName: 'tags-id',
          name: '태그들'
        }, {
          path: '/archives',
          routerName: 'archives',
          name: '아키브즈'
        }, {
          path: '/search',
          routerName: 'search-id',
          name: '검색'
        }],
        adminNavs: [{
          path: '/admin/private',
          routerName: 'admin-private',
          name: '글 관리'
        }, {
          path: '/admin/tags',
          routerName: 'admin-tags',
          name: '태그 관리'
        }, {
          path: '/admin/update',
          routerName: 'admin-update',
          name: '수정 관리'
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
        this.$store.dispatch('auth/LOGOUT').then(data => {
          if (data.success) {
            this.$store.state.token = ''
            this.$router.push('/')
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '~/assets/css/vars.scss';
  .blog {
    position: relative;
    .header-wrapper {
      width: 100%;
      border-bottom: 1px solid #eee;
      display: flex;
    }
    .blog-header {
      width: 960px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      line-height: 50px;
      .header-title {
        font-size: 20px;
        fonr-weight: 600;
        a:link,
        a:visited,
        a:hover,
        a:active {
          color: $font-color;
        }
      }
      .header-nav {
        ul {
          list-style: none;
        }
        li {
          display: inline-block;
          a {
            color: $font-color;
            padding: 0 15px;
            &:hover {
              color: $link-color;
            }
          }
          &.nav-active a {
            color: $link-color;
          }
        }
      }
      .blog-body {
        padding-left: 15px;
        padding-right: 15px;
      }
      .blog-aside {
        position: fixed;
        right: 50px;
        bottom: 50px;
        z-index: 999;
        .aside-new,
        .aside-backtop {
          display: block;
          width: 40px;
          line-height: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #fafafa;
          border: 1px solid #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
          text-align: center;
          opacity: 1;
        }
        .aside-backtop {
          margin-bottom: 10px;
          i {
            font-size: 25px;
          }
        }
      }
      .blog-footer {
        max-width: 700px;
        margin: 0 auto;
        border-top: 1px solid #eee;
        text-align: center;
        font-size: 12px;
        p {
          line-height: 50px;
          color: #999;
        }
        a {
          color: $link-color;
        }
      }
    }
  }

</style>
