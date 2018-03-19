<template>
  <div>
    <div>
      <div class="uk-offcanvas-content">
        <div class="uk-section uk-height-viewport uk-section-secondary uk-light">
          <div class="uk-container">
            <div class="uk-position-center uk-text-center uk-light uk-width-5-6">
              <div
                class="uk-position-relative uk-visible-toggle uk-light"
                uk-slideshow="animation: push"
              >
                <ul class="uk-slideshow-items">
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait1.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait2.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait3.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait4.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait5.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait6.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait7.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                  <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                      <img
                        src="../images/portrait8.jpg"
                        alt=""
                        uk-cover
                      >
                    </div>
                  </li>
                </ul>
                <a
                  class="uk-position-center-left uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slidenav-previous
                  uk-slideshow-item="previous"
                />
                <a
                  class="uk-position-center-right uk-position-small uk-hidden-hover"
                  href="#"
                  uk-slidenav-next
                  uk-slideshow-item="next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-text-bottom">
      <a
        id="return"
        href="#"
        
      >
        <span
          uk-icon="icon: chevron-left; ratio: 2.0;"
          @click="gotoTop()"
        />
      </a>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Portfolio',
  methods: {
    gotoTop () {
      router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
#return {
  float: left;
  margin: 0;
  padding: 0;
  position: fixed;
  left: 2vw;
  bottom: 3vh;
  color: white;
}
</style>
