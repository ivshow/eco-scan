<!--
 * @Author : jaydon
 * @Date   : 2021-06-17 19:03
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
-->

<template>
  <div>
    <v-nav-bar title="设备列表"></v-nav-bar>
    <van-cell v-for="(item, index) in list" :key="index" is-link center :to="`/details?id=${item.QRcode}`">
      <template #title>
        <span>{{ index + 1 }}.</span>
        <span>{{ item.QRcode }}</span>
        <van-tag plain type="warning">{{ item.Status }}</van-tag>
      </template>
      <template #label>
        <span>品牌: {{ item.MachineBrand }}</span>
        <span>CPU: {{ item.MachineCPU }}</span>
        <span>内存: {{ item.MachineMemory }}</span>
        <span>硬盘: {{ item.MachineHDDType }}</span>
        <span>硬盘容量: {{ item.MachineHDDSize }}</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    this.list = await this.$getProductsByBox(this.$route.query.id);
  }
};
</script>

<style lang="scss" scoped>
.van-cell__title span {
  margin-right: 5px;
}
.van-cell__label {
  display: flex;
  flex-wrap: wrap;
  padding-left: 14px;

  span {
    margin-right: 10px;
  }
}
</style>
