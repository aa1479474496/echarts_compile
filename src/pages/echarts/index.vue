<template>
  <div>
    <template v-if="links.length">
      <div style="padding: 12px">
        <span>demo跳转:</span>
        <el-link
          v-for="item in links"
          :key="item.name"
          @click="to(item.path)"
          :class="[item.path == fullPath ? 'is_active' : '']"
          style="margin-left: 20px"
        >
          {{ item.title }}
        </el-link>
      </div>
    </template>

    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { routes } from "@/router/index.js";
export default {
  data() {
    return {
      links: [],
    };
  },

  computed: {
    fullPath() {
      return this.$route.fullPath;
    },
  },

  mounted() {
    let echartRoutes = routes.find((route) => route.path == "/echarts") || {};
    let { children = null } = echartRoutes;
    if (children) {
      this.links = children;
    }
  },

  methods: {
    to(path) {
      if (path == this.fullPath) {
        return;
      }
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="scss">
.el-link.is_active {
  .el-link--inner {
    @include text_color(color_2);
  }
}
</style>