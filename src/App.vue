<template>
  <div id="app">
    <transition :name="base.slideType">
			<router-view class="m-view"></router-view>
		</transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState([
      'base'
    ])
  }
}
</script>

<style lang="scss">
@import '@/style/base.scss';
@import 'App.scss';
</style>
