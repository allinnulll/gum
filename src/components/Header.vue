<template>
	<div class="m-Header">
		<button @click="back">Back</button>
		<button @click="home" v-if="!isHome">Home</button>
	</div>
</template>

<script>
export default {
  computed: {
    isHome () {
      return this.$route.name.indexOf('Home_') > -1
    }
  },
  methods: {
    back () {
      this.pageSkip({type: 'back'})
    },
    home () {
      this.pageSkip({type: 'back', name: 'Home_home'})
    }
  }
}
</script>

<style lang="scss" scoped>
	.m-Header{
		height: 44px;
		width: 100%;
	}
</style>
