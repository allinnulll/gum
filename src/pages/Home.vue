<template>
	<div>
		<m-header></m-header>
		<button @click="login">去登录</button>
		<button @click="book">Book</button>
		<router-view name="sideNav"></router-view>
		这是首页内容
		<router-view></router-view>
	</div>
</template>

<script>
import mHeader from '@/components/Header'
export default {
  data () {
    return {
      page: 'home'
    }
  },
  components: {
    mHeader
  },
  beforeCreate () {

  },
  computed: {

  },
  methods: {
    login () {
      this.pageSkip({type: 'up', name: 'Login_login'})
    },
    book () {
      this.pageSkip({type: 'go', name: 'Book_book'})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
