const state = {
  slideType: 'slide-fade'
}

// getters
const getters = {
  aaa: (state, getters, rootState) => {
    return 'aaa'
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
  setSlideType (state, type) {
    state.slideType = type
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
