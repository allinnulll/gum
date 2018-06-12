<template>
	<div class="m-Sort">
		<m-header></m-header>
		<nav>{{page}}</nav>
		<router-view></router-view>
	</div>
</template>
<script>
import mHeader from '@/components/PC/common/Header'
export default {
  computed: {
    page () {
      return this.$route.name.split('_')[0]
    }
  },
  components: { mHeader }
}
</script>

<style lang="scss" scoped>
	nav{
		height: 10px;
		width: 100%;
	}
</style>
