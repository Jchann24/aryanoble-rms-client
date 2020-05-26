export const state = () => ({
  erfs: {},
  talents: {},
  cards: {}
})

export const getters = {
  ERFS(state) {
    return state.erfs
  },
  TALENTS(state) {
    return state.talents
  },
  CARDS(state) {
    return state.cards
  }
}

export const mutations = {
  SET_ERF(state, payload) {
    state.erfs = payload
  },
  SET_TALENT(state, payload) {
    state.talents = payload
  },
  SET_CARD(state, payload) {
    state.cards = payload
  }
}

export const actions = {
  async GET_ERFS({ commit }) {
    const data = await this.$axios.$get('erf/')
    commit('SET_ERF', data)
  },
  async GET_TALENTS({ commit }, page) {
    const data = await this.$axios.$get('candidate/?page=' + page)
    commit('SET_TALENT', data)
  },
  async GET_CARDS({ commit }) {
    const data = await this.$axios.$get('candidate-card/')
    commit('SET_CARD', data)
  }
}
