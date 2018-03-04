<template>
  <div>
    <div class="uk-offcanvas-content">
      <div class="uk-section">
        <div class="uk-container">
          <div>About</div>
          <a
            @click="gotoTop()"
          >TO TOP</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'About',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    gotoTop () {
      router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
#totop {
  float: right;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 10vw;
  bottom: 10vh;
  color: white;
}
</style>
