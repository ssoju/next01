require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
  },
  app: {
    host: 'localhost',
    port: 3000,
    routerBaseApi: '/api'
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var start = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var _this = this;

    var app, host, port, router, config, nuxt, builder;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new _koa2.default();
            host = process.env.HOST || _config2.default.app.host;
            port = process.env.PORT || _config2.default.app.port;
            router = new _koaRouter2.default();


            app.use((0, _cors2.default)());
            app.use((0, _koaBodyparser2.default)());
            app.use((0, _koaStatic2.default)('.'));
            router.use('', _routes2.default.routes());
            app.use(router.routes()).use(router.allowedMethods());

            config = __webpack_require__(7);

            config.dev = !(app.env === 'production');

            nuxt = new _nuxt.Nuxt(config);

            if (!config.dev) {
              _context2.next = 16;
              break;
            }

            builder = new _nuxt.Builder(nuxt);
            _context2.next = 16;
            return builder.build();

          case 16:

            app.use(function () {
              var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200;return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port);
          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

var _koa = __webpack_require__(10);

var _koa2 = _interopRequireDefault(_koa);

var _nuxt = __webpack_require__(11);

var _koaStatic = __webpack_require__(12);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaBodyparser = __webpack_require__(13);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaRouter = __webpack_require__(4);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _cors = __webpack_require__(14);

var _cors2 = _interopRequireDefault(_cors);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

start();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bodyParser = __webpack_require__(8);
var session = __webpack_require__(9);

module.exports = {
  head: {
    title: 'vinylc family',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~assets/css/common.scss'],

  loading: { color: '#3B8070' },


  router: {
    middleware: ['i18n'],
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        var position = {};

        if (to.matched.length < 2) {
          position = { x: 0, y: 0 };
        } else if (to.matched.some(function (r) {
          return r.components.default.options.scrollToTop;
        })) {
          position = { x: 0, y: 0 };
        }

        if (to.hash) {
          position = { selector: to.hash };
        }
        return position;
      }
    },
    extendRoutes: function extendRoutes(routes, resolve) {}
  },

  plugins: ['@/plugins/i18n.js', '@/plugins/axios.js'],

  serverMiddleware: [bodyParser.json(), session({
    secret: 'super-secret-key',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })],

  build: {
    extractCSS: {
      allChunks: true
    },

    vendor: ['axios']

  },

  manifest: {
    name: 'family',
    description: '...',
    theme_color: '#000000'
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/axios']
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = __webpack_require__(4);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _checkToken = __webpack_require__(16);

var _checkToken2 = _interopRequireDefault(_checkToken);

var _user = __webpack_require__(20);

var user = _interopRequireWildcard(_user);

var _tag = __webpack_require__(22);

var tag = _interopRequireWildcard(_tag);

var _article = __webpack_require__(23);

var article = _interopRequireWildcard(_article);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaRouter2.default({
  prefix: _config2.default.app.routerBaseApi
});

router.get('/user', user.getUserInfo).patch('/user', _checkToken2.default, user.patchUserInfo).post('/login', user.login).post('/logout', _checkToken2.default, user.logout);

router.get('/tags/:id?', tag.getTagsOrArticles).post('/tag', _checkToken2.default, tag.postTag).patch('/tag', _checkToken2.default, tag.patchTag).del('/tag/:id?', _checkToken2.default, tag.deleteTag);

router.get('/search/:keyword?', article.search).get('/article/:id?', article.getArticle).get('/articles/:page?/:limit?', article.getArticles).get('/private-articles', _checkToken2.default, article.getPrivateArticles).get('/archives', article.archives).post('/article', _checkToken2.default, article.postArticle).post('/upload', _checkToken2.default, article.upload).patch('/article', _checkToken2.default, article.patchArticle).del('/article/:id?', _checkToken2.default, article.deleteArticle);

exports.default = router;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = __webpack_require__(5);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
var User = _mongoose2.default.model('User');

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var token, decoded, username, userID, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = ctx.get('token');

            if (!token) {
              _context.next = 22;
              break;
            }

            decoded = _jsonwebtoken2.default.verify(token, _config2.default.jwt.secret);
            username = decoded.username;
            userID = decoded.userID;
            _context.prev = 5;
            _context.next = 8;
            return User.findOne({ _id: userID, username: username }).exec();

          case 8:
            user = _context.sent;

            if (!(user._id && user.username)) {
              _context.next = 14;
              break;
            }

            _context.next = 12;
            return next();

          case 12:
            _context.next = 15;
            break;

          case 14:
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: 'Token is invalid'
            });

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](5);
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: _context.t0
            });

          case 20:
            _context.next = 23;
            break;

          case 22:
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: 'Please login'
            });

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[5, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  role: {
    type: String,
    default: 'user'
  },
  username: String,
  password: String,
  email: String,
  nickname: String,
  motto: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
    delete ret.password;
    delete ret.username;
  }
};
_mongoose2.default.model('User', UserSchema);

exports.default = UserSchema;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ArticleSchema = new Schema({
  title: String,
  content: String,
  publish: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  flag: {
    type: Number,
    default: 1
  },
  like: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ArticleSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
};

_mongoose2.default.model('Article', ArticleSchema);

exports.default = ArticleSchema;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var TagSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

TagSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
};

_mongoose2.default.model('Tag', TagSchema);

exports.default = TagSchema;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchUserInfo = exports.getUserInfo = exports.LOGOUT = exports.LOGIN = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = __webpack_require__(5);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _md = __webpack_require__(21);

var _md2 = _interopRequireDefault(_md);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var login = exports.LOGIN = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var _ctx$request$body, username, password, user, secret, expiresIn, token;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;

            password = (0, _md2.default)(password);
            _context.prev = 2;
            _context.next = 5;
            return User.findOne({ username: username, password: password }).exec();

          case 5:
            user = _context.sent;
            secret = _config2.default.jwt.secret;
            expiresIn = _config2.default.jwt.expiresIn;
            token = _jsonwebtoken2.default.sign({ username: user.username, userID: user._id }, secret);

            ctx.cookies.set('token', token);
            ctx.body = {
              success: true,
              data: {
                token: token
              }
            };
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);

            ctx.body = {
              success: false,
              data: _context.t0
            };

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 13]]);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var logout = exports.LOGOUT = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx.cookies.set('token', null);
            ctx.body = {
              success: true,
              data: {}
            };

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function logout(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getUserInfo = exports.getUserInfo = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
    var avatarUrl, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            avatarUrl = ctx.protocol + '://' + ctx.host + '/public/' + _config2.default.user.avatar;
            _context3.prev = 1;
            _context3.next = 4;
            return User.findOne({ role: 'superAdmin' }).exec();

          case 4:
            data = _context3.sent;

            data.avatar = avatarUrl;
            ctx.body = {
              success: true,
              data: data
            };
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](1);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[1, 9]]);
  }));

  return function getUserInfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var patchUserInfo = exports.patchUserInfo = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {
    var body, oldPassword, newPassword, user;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = ctx.request.body;

            if (!(body.oldPassword && body.newPassword)) {
              _context4.next = 21;
              break;
            }

            oldPassword = (0, _md2.default)(body.oldPassword);
            newPassword = (0, _md2.default)(body.newPassword);
            _context4.prev = 4;
            _context4.next = 7;
            return User.findOne({ role: 'superAdmin' }).exec();

          case 7:
            user = _context4.sent;

            if (!(user.password !== oldPassword)) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt('return', ctx.body = {
              success: false,
              err: 'Wrong password'
            });

          case 10:
            _context4.next = 12;
            return User.findOneAndUpdate({ role: 'superAdmin' }, { password: newPassword, updatedAt: Date.now() }).exec();

          case 12:
            body = _context4.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 19;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4['catch'](4);

            ctx.body = {
              success: false,
              err: _context4.t0
            };

          case 19:
            _context4.next = 32;
            break;

          case 21:
            body.updatedAt = Date.now();
            _context4.prev = 22;
            _context4.next = 25;
            return User.findOneAndUpdate({ role: 'superAdmin' }, body).exec();

          case 25:
            body = _context4.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 32;
            break;

          case 29:
            _context4.prev = 29;
            _context4.t1 = _context4['catch'](22);

            ctx.body = {
              success: false,
              err: _context4.t1
            };

          case 32:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[4, 16], [22, 29]]);
  }));

  return function patchUserInfo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTag = exports.patchTag = exports.postTag = exports.getTagsOrArticles = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = _mongoose2.default.model('Tag');
var Article = _mongoose2.default.model('Article');
var getTagsOrArticles = exports.getTagsOrArticles = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var id, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.params.id, data = void 0;

            if (!id) {
              _context.next = 14;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return Article.find({ publish: true, tags: [id] }).populate({
              path: 'tags',
              select: 'id name'
            }).sort({ 'updatedAt': -1 }).exec();

          case 5:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data
            };
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](2);

            ctx.body = {
              success: false,
              err: _context.t0
            };

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.next = 16;
            return Tag.find({}).sort({ 'updatedAt': -1 }).exec();

          case 16:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data
            };

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 9]]);
  }));

  return function getTagsOrArticles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var postTag = exports.postTag = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    var body, _body, name;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            body = ctx.request.body;
            _body = body, name = _body.name;

            if (name) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', ctx.body = {
              success: false,
              err: 'Tag name is required'
            });

          case 4:
            _context2.prev = 4;

            body = new Tag(body);
            _context2.next = 8;
            return body.save();

          case 8:
            ctx.body = {
              success: true,
              data: body
            };
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](4);

            ctx.body = {
              success: false,
              err: _context2.t0
            };

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[4, 11]]);
  }));

  return function postTag(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var patchTag = exports.patchTag = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
    var body, _body2, id;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = ctx.request.body;

            body.updatedAt = Date.now();
            _body2 = body, id = _body2.id;

            if (id) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 5:
            _context3.prev = 5;
            _context3.next = 8;
            return Tag.findByIdAndUpdate(id, body).exec();

          case 8:
            body = _context3.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3['catch'](5);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[5, 12]]);
  }));

  return function patchTag(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteTag = exports.deleteTag = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {
    var id, body;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context4.prev = 3;
            _context4.next = 6;
            return Tag.findByIdAndRemove(id).exec();

          case 6:
            body = _context4.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4['catch'](3);

            ctx.body = {
              success: false,
              err: _context4.t0
            };

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[3, 10]]);
  }));

  return function deleteTag(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = exports.archives = exports.search = exports.deleteArticle = exports.patchArticle = exports.postArticle = exports.getArticle = exports.getPrivateArticles = exports.getArticles = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = __webpack_require__(24);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(25);

var _fs2 = _interopRequireDefault(_fs);

var _formidable = __webpack_require__(26);

var _formidable2 = _interopRequireDefault(_formidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = _mongoose2.default.model('Article');

var getArticles = exports.getArticles = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var _ctx$params, _ctx$params$page, page, _ctx$params$limit, limit, total, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$params = ctx.params, _ctx$params$page = _ctx$params.page, page = _ctx$params$page === undefined ? 1 : _ctx$params$page, _ctx$params$limit = _ctx$params.limit, limit = _ctx$params$limit === undefined ? 15 : _ctx$params$limit;

            page = Number((page - 1) * limit) || 0;
            limit = Number(limit) || 15;

            _context.prev = 3;
            _context.next = 6;
            return Article.find({ publish: true }).exec();

          case 6:
            total = _context.sent;

            total = total.length;
            _context.next = 10;
            return Article.find({ publish: true }).populate({
              path: 'tags',
              select: 'id name'
            }).skip(page).limit(limit).sort({ 'createdAt': -1 }).exec();

          case 10:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data,
              total: total
            };
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](3);

            ctx.body = {
              success: false,
              err: _context.t0,
              total: 0
            };

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 14]]);
  }));

  return function getArticles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getPrivateArticles = exports.getPrivateArticles = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Article.find({ publish: false }).populate({
              path: 'tags',
              select: 'id name'
            }).sort({ 'updatedAt': -1 }).exec();

          case 2:
            data = _context2.sent;

            ctx.body = {
              success: true,
              data: data
            };

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getPrivateArticles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getArticle = exports.getArticle = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
    var id, article;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context3.prev = 3;
            _context3.next = 6;
            return Article.findOne({ _id: id }).populate({
              path: 'tags',
              select: 'id name'
            }).exec();

          case 6:
            article = _context3.sent;
            _context3.next = 9;
            return Article.findByIdAndUpdate(id, { views: article.views + 1 }).exec();

          case 9:
            ctx.body = {
              success: true,
              data: article
            };
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3['catch'](3);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[3, 12]]);
  }));

  return function getArticle(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var postArticle = exports.postArticle = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {
    var body, _body, title, content, publish;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = ctx.request.body;
            _body = body, title = _body.title, content = _body.content, publish = _body.publish;

            if (!(!title || !content || !String(publish))) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 4:
            _context4.prev = 4;
            _context4.next = 7;
            return new Article(body);

          case 7:
            body = _context4.sent;
            _context4.next = 10;
            return body.save();

          case 10:
            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](4);

            ctx.body = {
              success: false,
              err: _context4.t0
            };

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[4, 13]]);
  }));

  return function postArticle(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var patchArticle = exports.patchArticle = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(ctx, next) {
    var body, _body2, id, title, content, publish;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = ctx.request.body;

            body.updatedAt = Date.now();
            _body2 = body, id = _body2.id, title = _body2.title, content = _body2.content, publish = _body2.publish;

            if (!(!id || !title || !content || !String(publish))) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 5:
            _context5.prev = 5;
            _context5.next = 8;
            return Article.findByIdAndUpdate(id, body).exec();

          case 8:
            body = _context5.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5['catch'](5);

            ctx.body = {
              success: false,
              err: _context5.t0
            };

          case 15:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[5, 12]]);
  }));

  return function patchArticle(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var deleteArticle = exports.deleteArticle = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(ctx, next) {
    var id, body;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return Article.findByIdAndRemove(id).exec();

          case 6:
            body = _context6.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6['catch'](3);

            ctx.body = {
              success: false,
              err: _context6.t0
            };

          case 13:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[3, 10]]);
  }));

  return function deleteArticle(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var search = exports.search = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(ctx, next) {
    var keyword, reg, body;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            keyword = ctx.params.keyword;
            reg = new RegExp(keyword, 'i');
            _context7.prev = 2;
            _context7.next = 5;
            return Article.find({
              publish: true,
              $or: [{ title: { $regex: reg } }]
            }).sort({ 'createdAt': -1 }).exec();

          case 5:
            body = _context7.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7['catch'](2);

            ctx.body = {
              success: false,
              err: _context7.t0
            };

          case 12:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[2, 9]]);
  }));

  return function search(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var archives = exports.archives = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(ctx, next) {
    var articles, arr, arr2, year, month, date, i, _i, total, archiveArticles, j;

    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Article.find({ publish: true }).populate({
              path: 'tags',
              select: 'id name'
            }).select('id title tags createdAt updatedAt').sort({ 'createdAt': -1 }).exec();

          case 2:
            articles = _context8.sent;
            arr = [], arr2 = [], year = void 0, month = void 0, date = void 0;

            for (i = 0; i < articles.length; i++) {
              year = new Date(articles[i].createdAt).getFullYear() + '';
              month = new Date(articles[i].createdAt).getMonth() + 1 + '';
              if (month.length === 1) {
                month = '0' + month;
              }
              date = year + '\uB144 ' + month + '\uC6D4';
              arr.push({
                date: date,
                article: articles[i]
              });
            }

            for (_i = 0; _i < arr.length;) {
              total = 0, archiveArticles = [];

              for (j = _i; j < arr.length; j++) {
                if (arr[_i].date === arr[j].date) {
                  archiveArticles.push(arr[j].article);
                  total++;
                }
              }
              arr2.push({
                date: arr[_i].date,
                articles: archiveArticles,
                total: total
              });
              _i += total;
            }

            ctx.body = {
              success: true,
              data: arr2
            };

          case 7:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined);
  }));

  return function archives(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var upload = exports.upload = function () {
  var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(ctx, next) {
    var form, getImgUrl;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            getImgUrl = function getImgUrl(ctx) {
              return new Promise(function (resolve, reject) {
                form.parse(ctx.req, function (err, fields, files) {
                  if (err) {
                    reject(err);
                  }

                  var lastItem = files[Object.keys(files)[Object.keys(files).length - 1]];

                  var extname = Date.now() + _path2.default.extname(lastItem.name);
                  var oldUrl = lastItem.path;
                  var newUrl = './public/' + extname;

                  var readStream = _fs2.default.createReadStream(oldUrl);
                  var writeStream = _fs2.default.createWriteStream(newUrl);
                  readStream.pipe(writeStream);
                  var imgUrl = ctx.protocol + '://' + ctx.host + '/public/' + extname;
                  resolve(imgUrl);
                });
              });
            };

            form = new _formidable2.default.IncomingForm();
            _context9.next = 4;
            return getImgUrl(ctx).then(function (url) {
              ctx.body = url;
            });

          case 4:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  }));

  return function upload(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
