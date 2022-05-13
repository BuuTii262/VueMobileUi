<template>
  <div class="account-index">
    <van-button type="warning">This is account page</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'AccountIndex',
  components: {},
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss"></style>
