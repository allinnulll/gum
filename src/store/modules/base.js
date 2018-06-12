const state = {
  slideType: 'slide-fade',
  path: []
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
  },
  addPath (state, p) {
    state.path.push(p)
  },
  removePath (state, p) {
    state.path.pop()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
