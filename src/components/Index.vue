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
    <div v-if="isPortfolio">
      <about @gotoTop="gotoTop" />
    </div>
  </div>
</template>

<script>
import Top from './Top.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'

export default {
  name: 'Index',
  components: {
    Top,
    About,
    Portfolio
  },
  data () {
    return {
      isTop: true,
      isAbout: false,
      isPortfolio: false
    }
  },
  methods: {
    gotoTop () {
      this.isTop = true
      this.isAbout = false
      this.isPortfolio = false
    },
    gotoAbout () {
      this.isTop = false
      this.isAbout = true
      this.isPortfolio = false
    },
    gotoPortfolio () {
      this.isTop = false
      this.isAbout = false
      this.isPortfolio = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
