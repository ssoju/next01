export default {
  SET_LANG (state, payload) {
    if (state.locales.indexOf(payload) !== -1) {
      state.locales = payload;
    }
  }
}
