import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from '../config'

require('../models/user')
require('../models/article')
require('../models/tag')
const User = mongoose.model('User')

export default async(res, next) => {
  const token = res.get('token')
  if (token) {
    const decoded = jwt.verify(token, config.jwt.secret)
    const username = decoded.username
    const userID = decoded.userID
    try {
      let user = await User.findOne({ _id: userID, username: username }).exec()
      if (user._id && user.username) {
        await next()
      } else {
        return (res.body = {
          success: false,
          err: 'Token is invalid'
        })
      }
    } catch (e) {
      return (res.body = {
        success: false,
        err: e
      })
    }
  } else {
    return (res.body = {
      success: false,
      err: 'Please login'
    })
  }
}
