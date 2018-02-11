<template>
  <div>
    <div
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav
        class="uk-navbar-container uk-navbar-transparent"
        uk-navbar
      >
        <div
          class="uk-navbar-right"
          style="position: fixed; z-index: 980;"
        >
          <a class="uk-navbar-item uk-logo" href="#home" uk-scroll>
            <img src="../images/logo.png" alt="logo" style="width: 100px; height: 20px;">
          </a>
          <ul class="uk-navbar-nav">
            <li><a href="#home" uk-scroll>home</a></li>
            <li><a href="#about" uk-scroll>about</a></li>
            <li><a href="#portfolio" uk-scroll>portfolio</a></li>
            <li><a href="#blog" uk-scroll>blog</a></li>
            <li><a href="#contact" uk-scroll>contact</a></li>
            <li><a href="#bottom" uk-scroll>bottom</a></li>
          </ul>
          <div class="uk-navbar-right uk-float-right">
            <img
              class=" uk-border-circle "
              src="../images/avatar.png"
              width="30"
              height="30"
              alt="avatar"
            >
          </div>
        </div>
      </nav>
    </div>
    <div class="uk-offcanvas-content">
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait1"
        id="home"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 class="uk-heading-hero">
                <span uk-parallax="opacity: 1,0; y: 0,-100; scale: 2,1; viewport: 0.5;">WELCOME TO HIROTATSU SITE</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait2"
        id="about"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">ポートレート</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">ここの背景の画像は、自分がカンボジアに行った時に撮影したものです。</p>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">トンレサップ湖というところで、人々が普通に湖の上で暮らしていました。</p>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">ここの背景日本ではなかなか感じることが出来ない、非日常を感じました。</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait3"
        id="portfolio"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait4"
        id="blog"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait5"
        id="contact"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-section uk-section-xlarge uk-section-secondary"
        id="bottom"
      >
        <div class="uk-container">
          <div class="uk-text-center">
            <h1 uk-parallax="opacity: 0,1; y: -200,0; scale: 2,1; viewport: 0.5;">今後ともよろしくお願いします。</h1>
          </div>
          <div class="uk-text-bottom">
            <a
              id="totop"
              href="#home"
              uk-scroll
              uk-tooltip="totop"
            >
              <span uk-icon="icon: chevron-up; ratio: 2.0;" />
            </a>
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
  color: white;
}
.portrait1 {
  background-image: url("../images/portrait1.jpg");
}
.portrait2 {
  background-image: url("../images/portrait2.jpg");
}
.portrait3 {
  background-image: url("../images/portrait3.jpg");
}
.portrait4 {
  background-image: url("../images/portrait4.jpg");
}
.portrait5 {
  background-image: url("../images/portrait5.jpg");
}
.portrait6 {
  background-image: url("../images/portrait6.jpg");
}
.portrait7 {
  background-image: url("../images/portrait7.jpg");
}
.portrait8 {
  background-image: url("../images/portrait8.jpg");
}
</style>
