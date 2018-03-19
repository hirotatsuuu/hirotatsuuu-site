<template>
  <div>
    <div>
      <div class="uk-offcanvas-content">
        <div class="uk-section uk-height-viewport uk-section-secondary uk-light">
          <div class="uk-container">
            <div class="uk-position-center uk-text-center uk-light">
              <p>
                <img
                  src="../images/avatar.png"
                  width="80"
                  height="80"
                  alt="avatar"
                >
                <button
                  class="uk-button uk-button-primary uk-margin"
                  @click="gotoTop()"
                >TOP</button>
              </p>
              <pre>
はじめまして。
ひろたつといいます。
まず、このページに来てくださってありがとうございます。
(なかなかここまで来てくださる方はいらっしゃらないので、、涙)

わざわざこんなところまで来てくださったあなたには、特別に僕の情報をプレゼントします！笑

僕は現在(2018/03)、23歳です。都内の会社でエンジニアのをしています。

学校は理系だったのですが、インフラよりの話が多く、当時はあまり興味が持てず
(実際は興味はあったが勉強する気が起きなかったｗ)、あんまりちゃんと勉強していませんでした。

就活のタイミングでまわりがみんなNTTやNECなどに行く中で、自分はそれらのキャリアがイメージできず、
実際に沢山手をうごかしたいなと思い、プログラムをちゃんと書けるであろう今の会社に就職しました。

(本当はもっと別の理由もたくさんあるのですが、今回はこんな感じですｗ)

現在はフロントエンドもサーバサイドもこなせるっぽい感じのエンジニアになっています。
(割合としては若干フロントエンドより、、？かな、、？)

といった感じのやつです。
仲良くしてやって下さい。ｗ
              </pre>
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
