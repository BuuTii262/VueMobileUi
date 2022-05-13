<template>
  <div class="login">
    <Form>
      <Field :rules="[{ required: true, message: '请填写用户名' }]" label="用户名" name="用户名" placeholder="用户名" v-model="form.username" />
      <Field :rules="[{ required: true, message: '请填写密码' }]" label="密码" name="密码" placeholder="密码" type="password" v-model="form.password" />
    </Form>
    <div class="submit-box">
      <Button @click="onSubmit" native-type="submit" round type="primary">登 录</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Button, Form, Field } from 'vant'
export default defineComponent({
  name: "LoginIndex",
  components: { Button, Form, Field },
  setup() {
    const router = useRouter()
    const state = reactive({
      form: {
        username: 'admin',
        password: '123456'
      },
      onSubmit() {
        router.push('/home')
      }
    });

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url("@/assets/image/login-bg.gif");
  background-repeat: no-repeat;
  background-size: 100% auto;
  overflow: hidden;
  .van-form {
    width: 80%;
    flex: 1;
    margin: 60% auto auto;
    .van-cell {
      height: 40px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 12px;
      border-radius: 4px;
      border-color: #eee;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  .submit-box {
    height: 20%;
    .van-button {
      width: 80%;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>