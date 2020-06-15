export const state = () => ({
  not_assigned: 0
})

export const getters = {
  NOT_ASSIGNED(state) {
    return state.not_assigned
  }
}

export const mutations = {
  SET_NOT_ASSIGNED(state, payload) {
    state.not_assigned = payload
  }
}

export const actions = {
  async GET_NOT_ASSIGNED({ commit }) {
    const data = await this.$axios.$get('notifications/')
    commit('SET_NOT_ASSIGNED', data.not_assigned)
  }
}
