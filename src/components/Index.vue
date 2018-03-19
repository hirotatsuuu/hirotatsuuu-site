<template>
  <div>
    <div v-if="isTop">
      <top
        @gotoAbout="gotoAbout"
        @gotoPortfolio="gotoPortfolio"
      />
    </div>
    <div v-if="isAbout">
      <about @gotoTop="gotoTop" />
    </div>
  </div>
</template>

<script>
import Top from './Top.vue'
import About from './About.vue'
import router from '../router'

export default {
  name: 'Index',
  components: {
    Top,
    About
  },
  data () {
    return {
      isTop: true,
      isAbout: false
    }
  },
  methods: {
    gotoTop () {
      this.isTop = true
      this.isAbout = false
    },
    gotoAbout () {
      this.isTop = false
      this.isAbout = true
    },
    gotoPortfolio () {
      router.push('/portfolio')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
