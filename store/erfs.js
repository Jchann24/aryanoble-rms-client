export const state = () => ({
  erfs: {}
})

export const getters = {
  ERFS(state) {
    return state.erfs
  }
}

export const mutations = {
  SET_ERF(state, payload) {
    state.erfs = payload
  }
}

export const actions = {
  async GET_ERFS({ commit }) {
    const data = await this.$axios.$get('erf/')
    commit('SET_ERF', data)
  },
  async SAVE_ERF({ commit }, payload) {
    await this.$axios.$post('erf/', payload)
  },
  async UPDATE_TALENT({ commit }, { payload, talentId }) {
    await this.$axios.$put(`candidate/${talentId}/`, payload)
  }
}
