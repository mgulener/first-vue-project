<template>
  <div class="container">
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex">
        <ul class="d-flex justify-content-between">
          <li v-for="item in navigation" :key="item.id">
            <a
              class="p-2 text-muted"
              :href="item.data.url"
              >{{ item.data.title }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { getNavigation } from "../../firebase.data";

export default {
  name: "Navigation",
  data() {
    return {
      navigation: [],
    };
  },
  mounted() {
    this.navigation = getNavigation();
  },
};
</script>

<style lang="less" scoped>
.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    padding: 0;
  }
}
</style>