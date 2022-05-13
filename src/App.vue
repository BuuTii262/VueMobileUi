<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '@/layout/Index.vue'
export default defineComponent({
  name: "App",
  components: { Layout },
  setup() {
    const route = useRoute()
    const state = reactive({

    });

    return {
      ...toRefs(state), route
    }
  }
})
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}
</style>