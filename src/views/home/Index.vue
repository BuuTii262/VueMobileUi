<template>
  <div class="home-index">
    <p>Home Page</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeIndex',
  setup() {
    const router = useRouter();
    const state = reactive({});

    return {
      ...toRefs(state),
      router,
    };
  },
});
</script>

<style lang="scss">
.home-index {
  font-size: 12px;
}
</style>
