export const state = () => ({
  interview_detail: {}
})

export const getters = {
  INTERVIEW_DETAIL(state) {
    return state.interview_detail
  }
}

export const mutations = {
  SET_INTERVIEW_DETAIL(state, payload) {
    state.interview_detail = payload
  }
}

export const actions = {
  async SAVE_INTERVIEW_DETAIL({ commit }, payload) {
    const data = await this.$axios.$post('interview-detail/', payload)
    commit('SET_INTERVIEW_DETAIL', data)
  }
}
