export const state = () => ({
  user_detail: {}
})

export const getters = {
  USER_DETAIL(state) {
    return state.user_detail
  }
}

export const mutations = {
  SET_USER_DETAIL(state, payload) {
    state.user_detail = payload
  }
}

export const actions = {
  async SAVE_USER_DETAIL({ commit }, payload) {
    const data = await this.$axios.$post('user-detail/', payload)
    commit('SET_USER_DETAIL', data)
  },

  async UPDATE_USER_DETAIL({ commit }, { payload, userDetailId }) {
    const data = await this.$axios.$patch(
      `user-detail/${userDetailId}`,
      payload
    )
    commit('SET_USER_DETAIL', data)
  }
}
