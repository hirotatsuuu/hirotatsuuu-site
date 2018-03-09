<template>
  <div>
    <div class="uk-animation-slide-right">
      <div class="uk-offcanvas-content">
        <div class="uk-section uk-height-viewport uk-section-secondary uk-light">
          <div class="uk-container">
            <div class="uk-position-center uk-text-center uk-light">
              <h1>Portfolio</h1>
              <button
                class="uk-button uk-button-primary"
                @click="gotoTop()"
              >TOP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  methods: {
    gotoTop () {
      this.$emit('gotoTop')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
