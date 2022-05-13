<template>
  <div class="account-index">
    <Button type="primary" to="/login">退出登录</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { Button } from 'vant'
export default defineComponent({
  name: "AccountIndex",
  components: { Button },
  setup() {
    const state = reactive({

    });

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
.account-index {
}
</style>