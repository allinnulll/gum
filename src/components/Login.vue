<template>
	<div class="m-Login">
		<button @click="login">登录</button>
	</div>
</template>

<script>
import mHeader from './Header'
export default {
  components: {
    mHeader
  },
  methods: {
    login () {
      this.pageSkip({type: 'go', name: 'Home_home'})
    }
  }
}
</script>

<style lang="scss" scoped>
.m-Login{
	background-color: rgba(0, 0, 0, 0.6);
}
</style>
