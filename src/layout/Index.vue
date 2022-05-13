<template>
  <div class="layout-index g-main">
    <router-view class="g-content" />
    <Tabbar placeholder v-model="active">
      <TabbarItem icon="home-o" name="HomeIndex" replace to="/home"
        >首页</TabbarItem
      >
      <TabbarItem badge="3" name="AccountIndex" replace to="/account">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { Tabbar, TabbarItem } from 'vant';
export default defineComponent({
  name: 'LayoutIndex',
  components: { Tabbar, TabbarItem },
  setup() {
    const route = useRoute();
    const state = reactive({
      active: computed({
        get: () => route.name,
        set: () => {},
      }),
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
//.layout-index {
//}
</style>
