export const state = () => ({
  cards: {}
})

export const getters = {
  CARDS(state) {
    return state.cards
  }
}

export const mutations = {
  SET_CARD(state, payload) {
    state.cards = payload
  }
}

export const actions = {
  async GET_CARDS({ commit }) {
    const data = await this.$axios.$get('candidate-cards/')
    commit('SET_CARD', data)
  }
}
