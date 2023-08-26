<script setup lang="ts">
import * as homeloading from "../public/icon/animation_llsbxvgt.json";

const homeloadingRef = ref();

onMounted(() => {
  homeloadingRef.value.play();
});
</script>

<template>
  <div>
    <v-app-bar flat border>
      <div class="header">
        <div class="header_nav">
          <div class="dancing logoFont">CainBlog</div>
          <div>
            <v-btn color="cainblue">首页</v-btn>
            <v-btn>博客</v-btn>
            <v-btn>视频</v-btn>
            <v-btn>归档</v-btn>
          </div>
        </div>
        <div>
          <v-btn icon="mdi-weather-sunny"></v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <div class="c-main">
          <div class="c-main-left">
            <h4 class="cain-docs">
              <span class="dancing cainlogodosc">cainblog</span>
              一个分享前端的的技术博客
            </h4>
            <p class="mt-4 cainjieshao">
              本博客记录着自己的技术文章和解决的bug,闲时也会录制一些开发视频来帮助到大家，希望我的网站也可以帮助到你
            </p>
            <div class="cainBtn" style="gap: 5px">
              <v-btn flat icon="mdi-github"></v-btn>
              <v-btn flat icon="mdi-wechat"></v-btn>
              <v-btn flat icon="mdi-qqchat"></v-btn>
            </div>
            <div class="cainBtn">
              <v-btn color="cainblue">查看博客</v-btn>
              <v-btn color="cainblue">分享链接</v-btn>
            </div>
          </div>
          <div class="c-main-right">
            <lottie
              :url="homeloading"
              :loop="true"
              v-model="homeloadingRef"
            ></lottie>
          </div>
        </div>
        <div class="c-about">
          <div class="about_info">
            <div class="AvatarBox">
              <v-avatar size="80">
                <v-img
                  src=" https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png"
                  alt="John"
                ></v-img>
              </v-avatar>
              <v-img
                width="110"
                style="position: absolute; top: 0px"
                src="https://cainblog.oss-cn-hangzhou.aliyuncs.com/ChampionIconFrame.webp"
              ></v-img>
            </div>
            <div class="about_info_text">
              <span class="dancing">hello</span> 你好这是<span class="dancing"
                >cain</span
              >
              前端的技术博客
              <br />创建网站也是为了存放自己的个人简介的文章,希望能帮助到正在访问的你
            </div>
          </div>
        </div>
        <div class="c-newblog">
          <div class="c-newblog-left">
            <h4>最新博客</h4>
            <p>最新的博客列表,可以滑动横条来查看最新一个星期的博客</p>
            <v-btn class="c-newblog-btn" color="cainblue">查看博客</v-btn>
          </div>
          <div class="c-newblog-right">
            <v-sheet class="mx-auto" style="width: 100%">
              <v-slide-group show-arrows>
                <v-slide-group-item
                  v-for="n in 25"
                  :key="n"
                  v-slot="{ isSelected, toggle }"
                >
                  <v-card
                    class="mx-auto"
                    max-width="400"
                    style="margin-left: 10px"
                  >
                    <v-img
                      class="align-end text-white"
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      cover
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

                    <v-card-text>
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="orange"> Share </v-btn>

                      <v-btn color="orange"> Explore </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  .header_nav {
    display: flex;
    align-items: center;
    gap: 20px;
    .logoFont {
      font-size: 26px;
      color: #154599;
    }
  }
}
.c-main {
  display: flex;
  padding: 0px 100px;
  .c-main-left {
    flex: 0 0 50%;
    box-sizing: border-box;
    padding-top: 120px;
    .cain-docs {
      font-size: 40px;
      .cainlogodosc {
        color: #154599;
        font-size: 60px !important;
      }
    }
    .cainjieshao {
      letter-spacing: 2px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
    .cainBtn {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
  }
  .c-main-right {
    flex: 0 0 50%;
    padding-top: 100px;
  }
}

.c-about {
  margin-top: 100px;
  .about_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .AvatarBox {
      transition: 0.6s;
      width: 110px;
      height: 110px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .about_info_text {
      text-align: center;
      font-size: 16px;
      line-height: 35px;
    }
  }
}

.c-newblog {
  width: 100%;
  box-sizing: border-box;
  padding: 70px 30px 70px 70px;
  border-radius: 20px;
  border: 1px rgba(0, 0, 0, 0.12) solid;
  margin-top: 50px;
  display: flex;
  .c-newblog-left {
    flex: 0 0 25%;
    h4 {
      font-size: 40px;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
    .c-newblog-btn {
      margin-top: 40px;
    }
  }
  .c-newblog-right {
    position: relative;
    width: 75%;
  }
}
</style>
