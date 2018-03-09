<template>
  <div>
    <div v-if="isTop">
      <top @gotoAbout="gotoAbout" />
    </div>
    <div v-if="isAbout">
      <about @gotoTop="gotoTop" />
    </div>
  </div>
</template>

<script>
import Top from './Top.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Blog from './Blog.vue'

export default {
  name: 'Index',
  components: {
    Top,
    About,
    Portfolio,
    Blog
  },
  data () {
    return {
      isTop: true,
      isAbout: false,
      isPortfolio: false,
      isBlog: false
    }
  },
  methods: {
    gotoTop () {
      this.isTop = true
      this.isAbout = false
      this.isPortfolio = false
      this.isBlog = false
    },
    gotoAbout () {
      this.isTop = false
      this.isAbout = true
      this.isPortfolio = false
      this.isBlog = false
    },
    gotoPortfolio () {
      this.$emit('gotoPortfolio')
    },
    gotoBlog () {
      this.$emit('gotoBlog')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
