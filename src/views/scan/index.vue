<!--
 * @Author : jaydon
 * @Date   : 2021-06-16 23:01
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
-->

<template>
  <div class="container">
    <div id="qr-code-scanner"></div>
  </div>
</template>

<script>
export default {
  meta: {
    path: '/',
    transition: false
  },
  html5QrCode: {},
  async mounted() {
    this.html5QrCode = new window.Html5Qrcode('qr-code-scanner');
    await this.html5QrCode.start(
      { facingMode: 'environment' },
      {
        fps: 10,
        qrbox: window.innerWidth * 0.7
      },
      this.onScanSuccess
    );
  },
  methods: {
    /**
     * @author: jaydon
     * @description: 箱子: QRB开头， 设备: QRM开头
     */
    onScanSuccess(text) {
      const id = text.replace(/^QRM|QRB|-.*/g, '');
      const path = this.$startsWith(text, 'QRM') ? 'details' : 'list';

      this.html5QrCode.stop();
      this.$router.push(`/${path}?id=${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  background: rgba(0, 0, 0, 0.48);
}

#qr-code-scanner {
  margin: auto;
  width: 100%;
}

/deep/ video {
  display: block;
}
</style>
