export const state = () => ({})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user.data
  }
}

export const mutations = {
  SET_ME(state, payload) {
    state.auth.user = payload
  }
}

export const actions = {
  async GET_ME({ commit }) {
    const data = await this.$axios.$get('me')
    commit('SET_ME', data)
  }
}
