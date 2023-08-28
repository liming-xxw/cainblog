<script setup lang="ts">
interface AppBar {
  url: string;
  name: string;
}

const appbar_list = ref<AppBar[]>([
  {
    url: "/",
    name: "首页",
  },
  {
    url: "/blogs",
    name: "博客",
  },
  {
    url: "/videos",
    name: "视频",
  },
  {
    url: "/opens",
    name: "开源项目",
  },
  {
    url: "/links",
    name: "友情链接",
  },
  {
    url: "/x",
    name: "归档",
  },
]);

const drawer = ref<boolean>(false);
</script>

<template>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list nav density="compact">
      <v-list-item
        v-for="item in appbar_list"
        :key="item.url"
        :value="item.url"
        :to="item.url"
      >
        <span style="font-size: 14px">{{ item.name }}</span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat border>
    <div class="header">
      <div class="header_nav">
        <div class="dancing logoFont">CainBlog</div>
        <div class="header_nav_btn">
          <v-btn
            v-for="(item, index) in appbar_list"
            :key="index"
            :to="item.url"
            exact
            >{{ item.name }}</v-btn
          >
        </div>
        <div class="header_menu_btn">
          <v-btn icon="mdi-menu" @click="drawer = true"></v-btn>
        </div>
      </div>
      <div>
        <v-btn icon="mdi-weather-sunny"></v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    .header_nav_btn {
      display: none;
    }
    .header_menu_btn {
      display: block !important;
    }
  }
  .header_nav {
    display: flex;
    align-items: center;
    gap: 20px;
    .header_menu_btn {
      display: none;
    }
    .logoFont {
      font-size: 26px;
      color: #154599;
    }
  }
}
</style>
