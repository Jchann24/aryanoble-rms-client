export const state = () => ({
  candidate_cards: {},
  candidate_card: {}
})

export const getters = {
  CANDIDATE_CARDS(state) {
    return state.candidate_cards
  },
  CANDIDATE_CARD(state) {
    return state.candidate_card
  }
}

export const mutations = {
  SET_CANDIDATE_CARDS(state, payload) {
    state.candidate_cards = payload
  },
  SET_CANDIDATE_CARD(state, payload) {
    state.candidate_card = payload
  }
}

export const actions = {
  async GET_CANDIDATE_CARDS({ commit }, page = 1) {
    const data = await this.$axios.$get('candidate-card/?page=' + page)
    commit('SET_CANDIDATE_CARDS', data)
  },

  async SAVE_CANDIDATE_CARD({ commit }, payload) {
    await this.$axios.$post('candidate-card/', payload)
  },

  async GET_CANDIDATE_CARD({ commit }, id) {
    const data = await this.$axios.$get(`candidate-card/${id}/`)
    commit('SET_CANDIDATE_CARD', data)
  },
  async UPDATE_CANDIDATE_CARD({ commit }, { payload, cardId }) {
    await this.$axios.$put(`candidate-card/${cardId}/`, payload)
  }
}
