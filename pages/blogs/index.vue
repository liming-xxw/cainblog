<template>
  <v-container class="d-flex justify-space-between">
    <div class="blogs-left"></div>
    <div class="blogs-content">
      <v-card class="blog-card" v-for="n in 4" :key="n" v-ripple>
        <div class="d-flex blog-card-box">
          <div>
            <v-img
              :width="100"
              height="100"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
          </div>

          <div class="blog-card-dosc">
            <h4 class="blog-card-dosc-title">开发测试进度模块</h4>
            <p class="blog-card-dosc-p">
              开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块开发测试进度模块
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
    <div class="blogs-right">123</div>
  </v-container>
</template>

<style lang="scss" scoped>
.blogs-left {
  width: 15%;
}

.blogs-content {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .blog-card {
    box-sizing: border-box;
    padding: 20px;
    cursor: pointer;
    .blog-card-box {
      gap: 20px;
      .blog-card-dosc-p {
        font-size: 14px;
        margin-top: 5px;
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
  width: 15%;
}
</style>
