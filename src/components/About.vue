<template>
  <div>
    <div>
      <div class="uk-offcanvas-content">
        <div class="uk-section uk-height-viewport uk-section-secondary uk-light">
          <div class="uk-container">
            <div class="uk-position-center uk-text-center uk-light">
              <h1>About</h1>
              <p>
                <img
                  src="../images/avatar.png"
                  width="80"
                  height="80"
                  alt="avatar"
                  uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
                >
              </p>
              <p>
                <button
                  class="uk-button uk-button-primary uk-margin"
                  @click="gotoTop()"
                >TOP</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    gotoTop () {
      this.$emit('gotoTop')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
