import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function ({ server, store, req }) {
  // If nuxt generate, pass this middleware
  if (server && !req) return
  const loggedUser = server ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('auth/SET_USER', loggedUser)
}
