export default {
  user: {
    role: 'superAdmin',
    username: 'demo',
    password: 'demo',
    email: 'comahead@gmail.com',
    nickname: 'VueBlog',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: 'ds255889.mlab.com',
    database: 'vueblogs',
    port: 55889,
    username: 'comahead',
    password: 'qazx1234'
  },
  production: {
    host: 'localhost',
    domain: 'https://localhost'
    // domain: 'http://127.0.0.1:3000'
  },
  app: {
    host: 'localhost',
    port: 3000,
    routerBaseApi: '/api'
  }
}
