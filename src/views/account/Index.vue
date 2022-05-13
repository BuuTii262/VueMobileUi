<template>
  <h1>Account Page</h1>
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

<style lang="scss" >
h1{
  font-size: 12px;
}
</style>
