export const state = () => ({
  candidate_accounts: {},
  candidate_account: {}
})

export const getters = {
  CANDIDATE_ACCOUNTS(state) {
    return state.candidate_accounts
  },
  CANDIDATE_ACCOUNT(state) {
    return state.candidate_account
  }
}

export const mutations = {
  SET_CANDIDATE_ACCOUNTS(state, payload) {
    state.candidate_accounts = payload
  },
  SET_CANDIDATE_ACCOUNT(state, payload) {
    state.candidate_account = payload
  }
}

export const actions = {
  async GET_CANDIDATE_ACCOUNTS({ commit }, page = 1) {
    const data = await this.$axios.$get('users/?page=' + page)
    commit('SET_CANDIDATE_ACCOUNTS', data)
  },

  async SAVE_CANDIDATE_ACCOUNT({ commit }, payload) {
    const data = await this.$axios.$post('register/', payload)
    commit('SET_CANDIDATE_ACCOUNT', data)
  },

  async GET_CANDIDATE_ACCOUNT({ commit }, id) {
    const data = await this.$axios.$get(`users/${id}/`)
    commit('SET_CANDIDATE_ACCOUNT', data)
  },
  async UPDATE_CANDIDATE_ACCOUNT({ commit }, { payload, accountId }) {
    await this.$axios.$put(`users/${accountId}/`, payload)
  },

  async SEARCH_CANDIDATE_ACCOUNTS({ commit }, search) {
    const data = await this.$axios.$get(`users/?name[like]=${search}%`)
    commit('SET_CANDIDATE_ACCOUNTS', data)
  }
}
