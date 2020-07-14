export const state = () => ({
  erfs: {},
  erf: {}
})

export const getters = {
  ERFS(state) {
    return state.erfs
  },
  ERF(state) {
    return state.erf
  }
}

export const mutations = {
  SET_ERFS(state, payload) {
    state.erfs = payload
  },
  SET_ERF(state, payload) {
    state.erf = payload
  }
}

export const actions = {
  async GET_ERFS({ commit }, page = 1) {
    const data = await this.$axios.$get('erfs/?page=' + page)
    commit('SET_ERFS', data)
  },
  async GET_ERF({ commit }, id) {
    const data = await this.$axios.$get(`erfs/${id}/`)
    commit('SET_ERF', data)
  },
  async SAVE_ERF({ commit }, payload) {
    await this.$axios.$post('erfs/', payload)
  },
  async UPDATE_TALENT({ commit }, { payload, talentId }) {
    await this.$axios.$put(`candidate/${talentId}/`, payload)
  }
}
