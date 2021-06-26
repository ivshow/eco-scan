<!--
 * @Author : jaydon
 * @Date   : 2021-06-17 19:03
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
-->

<template>
  <div>
    <v-nav-bar title="设备详情"></v-nav-bar>
    <div class="v-p-10" v-if="info.ID">
      <van-cell>
        <template #title>
          <span>编码:</span>
          <span>{{ info.QRcode }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>品牌:</span>
          <span>{{ info.MachineBrand }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>型号:</span>
          <span>{{ info.MachineVersion }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>CPU:</span>
          <span>{{ info.MachineCPU }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>内存:</span>
          <span>{{ info.MachineMemory }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>硬盘:</span>
          <span>{{ info.MachineHDDType }} {{ info.MachineHDDSize }}</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span>屏幕:</span>
          <span>{{ info.MachineScreenSize }}</span>
        </template>
      </van-cell>
    </div>
    <van-empty description="暂无数据" v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  async created() {
    this.info = await this.$getProductsInfo(this.$route.query.id);
  }
};
</script>

<style lang="scss" scoped>
.van-cell__title span {
  margin-right: 5px;
}
</style>
