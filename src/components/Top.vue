<template>
  <div>
    <div class="uk-offcanvas-content">
      <div class="uk-section uk-height-viewport uk-section-primary uk-light">
        <div class="uk-container">
          <div class="uk-position-center uk-text-center uk-light">
            <h1>ひろたつのさいと</h1>
            <p>
              ひろたつです。<br>
              現在エンジニアをやっています。<br>
              その中で自分のサイトを作ってみたくて作りました。<br>
            </p>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-xlarge uk-section-secondary">
        <div class="uk-container">
          <div class="uk-text-center">
            <h1>今後ともよろしくお願いします。</h1>
          </div>
          <div class="uk-text-bottom">
            <a
              id="totop"
              href="#"
              uk-totop
              uk-scroll
            />
          </div>
        </div>
      </div>
      <div class="uk-position-relative">
        <div class="uk-position-bottom uk-text-center uk-margin-small-bottom">
          <span class="uk-text-muted">Copyright 2018 hirotatsuuu</span>
        </div>
      </div>
    </div>
    <welcome-modal />
  </div>
</template>

<script>
import UIkit from 'uikit'
import WelcomeModal from './WelcomeModal.vue'

export default {
  name: 'Top',
  components: {
    'welcome-modal': WelcomeModal
  },
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    UIkit.modal('#welcome-modal').show()
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
  color: yellow;
}
</style>
