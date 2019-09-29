// GLOBAL Module
const getDefaultState = () => {
  return {
   
  }
}

export const state = getDefaultState

export const mutations = {
  SET_SEARCH (state, txt) {
    state.search = txt
    this.$router.replace({ path: '/' })
  },
  resetState (state) {
    Object.assign(state, getDefaultState())
  }
}

export const getters = {
  getUser: (state) => {
    return state.user
  }
}

export const actions = {
  resetState ({ commit }) {
    commit('resetState')
  },
  setLoadingShow ({ commit }, bool) {
    commit('SET_LOADING_SHOW', bool)
  }
}
