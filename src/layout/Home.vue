<template>
  <div class="page-tab">
    <router-view />
  </div>
  <van-tabbar v-model="active" active-color="black" inactive-color="gray">
    <van-tabbar-item
      replace
      :to="route.path"
      v-for="(route, index) in homeRouters"
      :key="index"
    >
      {{ route.meta.title }}
      <template #icon>
        <img :src="route.meta.icon_select" v-if="active == index" />
        <img :src="route.meta.icon" v-else />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { homeRouters } from "../router/modules/home";

const router = useRouter()
const route = useRoute;
const activeRoute = computed(() => {
  return router.currentRoute.value.path
})

const active = computed(() => {
  return homeRouters.findIndex((item) => {
    return item.path == activeRoute.value
  })
})
</script>

<style lang="scss" scoped>

</style>