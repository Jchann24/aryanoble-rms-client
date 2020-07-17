export const state = () => ({
  talents: {},
  talent: {}
})

export const getters = {
  TALENTS(state) {
    return state.talents
  }
}

export const mutations = {
  SET_TALENT(state, payload) {
    state.talent = payload
  },
  SET_TALENTS(state, payload) {
    state.talents = payload
  }
}

export const actions = {
  async GET_TALENTS({ commit }, page = 1) {
    const data = await this.$axios.$get('talents/?page=' + page)
    commit('SET_TALENTS', data)
  },
  async SAVE_TALENT({ commit }, payload) {
    await this.$axios.$post('talents/', payload, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  async UPDATE_TALENT({ commit }, { formData, talentId }) {
    await this.$axios.$post(`talents/${talentId}?method=_PUT`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  async PATCH_TALENT({ commit }, { accountId, talentId }) {
    await this.$axios.$patch(`talents/${talentId}/`, accountId)
  },

  async SEARCH_TALENTS({ commit }, search) {
    const data = await this.$axios.$get(`talents?name[like]=${search}%`)
    commit('SET_TALENTS', data)
  }
}
