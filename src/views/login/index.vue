<!--
 * @Author : jaydon
 * @Date   : 2021-06-18 00:27
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
-->

<template>
  <div>
    <div class="title">用户登录</div>
    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="user.uid"
        name="uid"
        label="用户名"
        placeholder="请输入用户名"
        required
        :rules="[{ required: true, message: '请输入用户名' }]"
      />
      <van-field
        v-model="user.pwd"
        name="pwd"
        label="密码"
        type="password"
        placeholder="请输入密码"
        required
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div class="v-m-40">
        <van-button round block type="danger" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    async onSubmit(value) {
      const token = await this.$login(value);
      this.$ls('token', token);
      this.$router.replace('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 40px;
  text-align: center;
  font-size: 22px;
}
.form {
  padding: 60px 20px;
}
</style>
