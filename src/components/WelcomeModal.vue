<template>
  <div
    id="welcome-modal"
    class="uk-flex-top"
  >
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-1-1">
      <button
        class="uk-modal-close-outside"
        type="button"
        uk-close
      />
      <h2 class="uk-modal-title">Welcome</h2>
      <div>
        Thank you for coming my site.<br>
        I hope you'll have a great time.<br>
      </div>
      <p class="uk-text-right">
        <button class="uk-button uk-button-default uk-modal-close">閉じる</button>
      </p>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'

export default {
  name: 'WelcomeModal',
  mounted () {
    UIkit.modal('#welcome-modal').hide()
  }
}
</script>
