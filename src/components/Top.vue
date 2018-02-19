<template>
  <div class="uk-offcanvas-content">
    <div
      v-if="windowOuterWidth < 800"
      uk-sticky="
        sel-target: .uk-navbar-container;
        cls-active: uk-navbar-sticky;
        bottom: #transparent-sticky-navbar;"
    >
      <nav
        class="uk-navbar-container"
        uk-navbar
      >
        <div
          class="uk-navbar-left"
          style="position: fixed; z-index: 980;"
        >
          <a
            class="uk-navbar-toggle"
            href="#"
            uk-toggle="target: #mobile-menu"
          >
            <span uk-navbar-toggle-icon />
          </a>
        </div>
      </nav>
      <div
        id="mobile-menu"
        uk-offcanvas="overlay: true;"
      >
        <div class="uk-offcanvas-bar">
          <div>
            <h4>
              <a
                class="uk-logo"
                href="#home"
                uk-scroll
              >
                <img
                  src="../images/logo.png"
                  alt="logo"
                  style="width: 150px; height: 30px;"
                >
              </a>
            </h4>
            <ul class="uk-list uk-list-large">
              <li><a
                class="uk-logo"
                href="#about"
                uk-scroll>ABOUT</a></li>
              <li><a
                class="uk-logo"
                href="#portfolio"
                uk-scroll>PROTFOLIO</a></li>
              <li><a
                class="uk-logo"
                href="#blog"
                uk-scroll>BLOG</a></li>
              <li><a
                class="uk-logo"
                href="#contact"
                uk-scroll>CONTACT</a></li>
              <li><a
                class="uk-logo"
                href="#sns"
                uk-scroll>SNS</a></li>
              <li><a
                class="uk-logo"
                href="#bottom"
                uk-scroll>BOTTOM</a></li>
            </ul>
        </div>
        </div>
      </div>
    </div>
    <div
      v-else
      uk-sticky="
        sel-target: .uk-navbar-container;
        cls-active: uk-navbar-sticky;
        bottom: #transparent-sticky-navbar;"
    >
      <nav
        class="uk-navbar-container uk-navbar-transparent"
        uk-navbar
      >
        <div
          class="uk-navbar-center"
          style="position: fixed; z-index: 980;"
        >
          <a
            class="uk-navbar-item uk-logo"
            href="#home"
            uk-scroll
          >
            <img
              src="../images/logo.png"
              alt="logo"
              style="width: 100px; height: 20px;"
            >
          </a>
          <ul class="uk-navbar-nav">
            <li><a
              href="#home"
              uk-scroll>home</a></li>
            <li><a
              href="#about"
              uk-scroll>about</a></li>
            <li><a
              href="#portfolio"
              uk-scroll>portfolio</a></li>
            <li><a
              href="#blog"
              uk-scroll>blog</a></li>
            <li><a
              href="#contact"
              uk-scroll>contact</a></li>
            <li><a
              href="#sns"
              uk-scroll>sns</a></li>
            <li><a
              href="#bottom"
              uk-scroll>bottom</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait1"
        id="home"
        style="
          background-position:center top;
          background-repeat:no-repeat;
          background-size:cover;"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 class="uk-heading-hero">
                <span uk-parallax="opacity: 1,0; y: 0,-50; scale: 2,1; viewport: 0.2;">WELCOME TO HIROTATSU SITE</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Tonlé Sap in Cambodia.</p>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait2"
        id="about"
        style="
          background-position:center top;
          background-repeat:no-repeat;
          background-size:cover;"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-width-1-2@m uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">ABOUT</h1>
              <article class="uk-comment">
                <header
                  class="uk-comment-header uk-grid-medium uk-flex-middle"
                  uk-grid
                >
                  <div class="uk-width-auto">
                    <img
                      class="uk-comment-avatar"
                      src="../images/avatar.png"
                      width="80"
                      height="80"
                      alt="avatar"
                      uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
                    >
                  </div>
                  <div class="uk-width-expand">
                    <h4 class="uk-comment-title uk-margin-remove">
                      <a
                        class="uk-link-reset"
                        href="#home"
                        uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;"
                      >HIROTATSU</a>
                    </h4>
                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                      <li>
                        <a
                          href="#sns"
                          uk-scroll
                          uk-parallax="opacity: 0,1; y: -50,0; scale: 2,1; viewport: 0.5;"
                        >SNS</a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          uk-scroll
                          uk-parallax="opacity: 0,1; y: -50,0; scale: 2,1; viewport: 0.5;"
                        >CONTACT</a>
                      </li>
                    </ul>
                  </div>
                </header>
                <div class="uk-comment-body" >
                  <p uk-parallax="opacity: 0,1; y: 50,0; scale: 0.5,1; viewport: 0.4;">I'm hirotatsu. My birth is 19941208. I'm 23 years old. I'm engineer.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Nigata in Japan.</p>
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
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">PORTFOLIO</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">The image in the background is a portfolio.</p>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Zadar in Croatia.</p>
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
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">BLOG</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Coming soon.</p>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture isGrand Canyon at Arizona in United States.</p>
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
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Contact</h1>
              <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Please send e-mail to hirotatsuuu@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Tonlé Sap in Cambodia.</p>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait6"
        id="sns"
      >
        <div class="uk-container">
          <div class="uk-text-center">
            <h1 uk-parallax="opacity: 0,1; y: -200,0; viewport: 0.5;">SNS</h1>
            <div
              class="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid
              uk-parallax="opacity: 0,1; y: 50,0; scale: 0.5,1; viewport: 0.4;"
            >
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://www.facebook.com/tatsuya.hirota.735"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-scale-up uk-transform-origin-bottom-right">
                    <h3 class="uk-card-title">Facebook</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://twitter.com/tatsuya_1208"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-slide-bottom-medium">
                    <h3 class="uk-card-title">Twitter</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://www.instagram.com/_hirotatsu_/"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-scale-up uk-transform-origin-bottom-left">
                    <h3 class="uk-card-title">Instagram</h3>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid
            >
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://github.com/hirotatsuya"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-slide-right-medium">
                    <h3 class="uk-card-title">GitHub</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://qiita.com/hirotatsuuu"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-scale-up">
                    <h3 class="uk-card-title">Qiita</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="http://esekansai.ga"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-slide-left-medium">
                    <h3 class="uk-card-title">EKK</h3>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid
            >
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://filmarks.com/users/h1208tatsuya"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-scale-up uk-transform-origin-top-right">
                    <h3 class="uk-card-title">Filmarks</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://www.wantedly.com/users/18194195"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-slide-top-medium">
                    <h3 class="uk-card-title">Wantedly</h3>
                  </div>
                </a>
              </div>
              <div class="uk-animation-toggle">
                <a
                  class="uk-link-reset"
                  href="https://hirotatsuuu.sarahah.com"
                  target="_blank"
                >
                  <div class="uk-card uk-card-hover uk-card-body uk-animation-scale-up uk-transform-origin-top-left">
                    <h3 class="uk-card-title">sarahah</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Tonlé Sap in Cambodia.</p>
        </div>
      </div>
      <div
        class="uk-section uk-height-viewport uk-background-cover portrait7"
      >
        <div class="uk-container">
          <div
            class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          >
            <div class="uk-text-center uk-margin-auto uk-margin-auto-vertical">
              <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Thank you for coming my site.</h1>
            </div>
          </div>
        </div>
        <div class="uk-overlay uk-light">
          <p>This picture is at Zadar in Coratia.</p>
        </div>
      </div>
      <div
        class="uk-position-relative"
        id="bottom"
      >
        <div class="uk-position-bottom uk-text-center uk-margin-small-bottom">
          <span class="uk-text-muted">Copyright 2018 hirotatsuuu</span>
        </div>
      </div>
    </div>
    <welcome-modal />
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
      message: '',
      windowOuterWidth: window.outerWidth
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
