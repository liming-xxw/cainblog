<script setup>
const items = [
  { text: "Real-Time", icon: "mdi-clock" },
  { text: "Audience", icon: "mdi-account" },
  { text: "Conversions", icon: "mdi-flag" },
];
</script>

<template>
  <v-container class="d-flex justify-space-between blogs-box" style="gap: 20px">
    <div class="blogs-left">
      <v-card class="user-card">
        <div class="about_info">
          <div class="AvatarBox">
            <v-avatar size="60">
              <v-img
                src=" https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png"
                alt="John"
              ></v-img>
            </v-avatar>
            <v-img
              width="70"
              style="position: absolute; top: 0px"
              src="https://cainblog.oss-cn-hangzhou.aliyuncs.com/ChampionIconFrame.webp"
            ></v-img>
          </div>
          <div class="about_info_text">前端的技术博客</div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="user-tags">
            <h4>文章数量</h4>
            <p>16</p>
          </div>

          <v-divider vertical></v-divider>
          <div class="user-tags">
            <h4>文章阅读</h4>
            <p>16</p>
          </div>
        </div>
      </v-card>
      <v-card class="special-column mt-4">
        <v-list density="compact" nav>
          <v-list-subheader>文章专栏</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <template v-slot:append>
              <v-badge color="error" content="6" inline></v-badge>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card
        class="blogs-tags mt-4 d-flex"
        style="gap: 5px; padding: 15px; flex-wrap: wrap"
      >
        <div v-for="n in 10" :key="n">
          <v-chip size="small" label color="cainblue"> Vue.js </v-chip>
        </div>
      </v-card>
    </div>
    <div class="blogs-content">
      <v-card class="blog-card" v-for="n in 4" :key="n" v-ripple>
        <div class="d-flex blog-card-box">
          <div>
            <v-img
              :width="100"
              height="100%"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
          </div>

          <div class="blog-card-dosc">
            <h4 class="blog-card-dosc-title">开发测试进度模块</h4>
            <v-chip size="x-small" label color="cainblue"> Vue.js </v-chip>

            <p class="blog-card-dosc-p">
              开发测试进度模块开发测试进度模块开发测试123333333333进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块
            </p>
            <div class="blog-card-tags">
              <span class="blog-card-tag">发布时间:2023-8-27</span>
              <span class="blog-card-tag"
                ><v-icon> mdi-eye-outline </v-icon>123</span
              >
              <span class="blog-card-tag"
                ><v-icon> mdi-thumb-up-outline </v-icon>123</span
              >
              <span class="blog-card-tag"
                ><v-icon> mdi-comment-outline </v-icon>123</span
              >
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="blogs-right">
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search templates"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      <v-card class="newblogs mt-4">
        <v-list density="compact" nav>
          <v-list-subheader>最新文章</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <template v-slot:append>
              <p style="font-size: 12px">2023-8-27</p>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card class="newblogs mt-4">
        <v-list density="compact" nav>
          <v-list-subheader>精品推荐</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <template v-slot:append>
              <p style="font-size: 12px">1000人阅读过</p>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.blogs-box {
  @media (max-width: 1270px) {
    flex-wrap: wrap;
    .blogs-left {
      order: 2;
      width: 100% !important;
      .user-card {
        display: none;
      }
      .special-column {
        display: none;
      }
      .blogs-tags {
        margin-top: 0px !important;
      }
    }
    .blogs-content {
      order: 3;
      width: 100% !important;
    }
    .blogs-right {
      order: 1;
      width: 100% !important;
      .newblogs {
        display: none;
      }
    }
  }
  .blogs-left {
    width: 23%;

    .user-card {
      box-sizing: border-box;
      padding: 20px;
      .about_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .AvatarBox {
          transition: 0.6s;
          width: 70px;
          height: 70px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about_info_text {
          margin-top: 5px;
          text-align: center;
          font-size: 14px;
        }
      }
      .user-tags {
        margin-top: 10px;
        text-align: center;
        h4 {
          font-size: 14px;
        }
        p {
          color: rgba(0, 0, 0, 0.6);
          font-size: 12px;
        }
      }
    }
  }

  .blogs-content {
    width: 54%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .blog-card {
      box-sizing: border-box;
      padding: 20px;
      cursor: pointer;
      transition: 0.9s;
      &:hover {
        background: linear-gradient(
          to right,
          rgba(0, 0, 255, 0.3) 0%,
          rgba(255, 255, 255, 0) 50%,
          rgba(0, 0, 255, 0.3) 100%
        );
      }
      .blog-card-box {
        gap: 20px;
        .blog-card-dosc-p {
          font-size: 14px;
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2;
        }
        .blog-card-tags {
          margin-top: 5px;

          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(0, 0, 0, 0.6);

          .blog-card-tag {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }
      }
    }
  }

  .blogs-right {
    width: 23%;
  }
}
</style>
