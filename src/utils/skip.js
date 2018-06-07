import Vue from 'vue'
import store from '@/store'
import getType from './dataType'

const skipType = {
  go (params) {
    store.commit('setSlideType', 'slide-in')
    this.$router.push(params)
  },
  back (params) {
    store.commit('setSlideType', 'slide-out')
    if (params.name || params.path) { return this.$router.push(params) }
    this.$router.go(-1)
  },
  down (params) {
    store.commit('setSlideType', 'slide-down')
    this.$router.push(params)
  },
  up (params) {
    store.commit('setSlideType', 'slide-up')
    this.$router.push(params)
  },
  refresh (params) {
    store.commit('setSlideType', 'slide-in')
    this.$router.replace(params)
  }
}
const pageSkip = function (params = {type: 'go', refresh: false}) {
  if (getType.isString(params)) {
    params = {
      type: 'go',
      url: params,
      refresh: false
    }
  };
  if (!(params.name || params.path) && params.type !== 'back') return
  const {type} = params
  switch (type) {
    case 'go':
      skipType.go.call(this, params)
      break
    case 'back':
      skipType.back.call(this, params)
      break
    case 'up':
      skipType.up.call(this, params)
      break
    case 'down':
      skipType.down.call(this, params)
      break
  }
}

Vue.prototype.pageSkip = pageSkip
