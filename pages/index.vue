<script setup lang="ts">
import * as homeloading from "../public/icon/animation_llsbxvgt.json";

const homeloadingRef = ref();

onMounted(() => {
  homeloadingRef.value.play();
});
</script>
<template>
  <div>
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
      <div class="c-newcard">
        <div class="c-newblog-left">
          <h4>最新博客</h4>
          <p>最新的博客列表,可以滑动横条来查看最新一个星期的博客</p>
          <v-btn class="c-newblog-btn" color="cainblue">查看博客</v-btn>
        </div>
        <div class="c-newblog-right">
          <v-sheet class="mx-auto" style="width: 100%">
            <v-slide-group show-arrows>
              <v-slide-group-item
                v-for="n in 7"
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

                  <v-card-subtitle class="pt-4"> 九天前 </v-card-subtitle>

                  <v-card-text>
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="orange"> 阅读博客 </v-btn>
                  </v-card-actions>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </div>
      <div class="c-newcard" style="padding: 70px 70px 70px 30px">
        <div class="c-newblog-right">
          <v-sheet class="mx-auto" style="width: 100%">
            <v-slide-group show-arrows>
              <v-slide-group-item
                v-for="n in 7"
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
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </div>
        <div class="c-newblog-left">
          <h4>最新视频</h4>
          <p>最新的视频列表,可以滑动横条来查看最新一个星期的视频</p>
          <v-btn class="c-newblog-btn" color="cainblue">查看视频</v-btn>
        </div>
      </div>
      <div class="c-opencode">
        <h4 class="c-opencode-title">开源项目</h4>
        <p class="c-opencode-docs">开源项目</p>

        <div class="c-opencode-list">
          <div class="c-opencode-item" v-for="n in 3" :key="n">
            <div class="d-flex" style="gap: 10px">
              <div>
                <v-avatar color="info" style="height: 100%; width: 70px">
                  <v-icon icon="mdi-vuetify"></v-icon>
                </v-avatar>
              </div>
              <div class="c-opencode-js">
                <h4>Cain.js</h4>
                <p>一个轻巧，简便的JavaScript框架</p>
                <div class="c-opencode-tags mt-1">
                  <span class="c-opencode-tag dancing">Stat:100</span>
                  <span class="c-opencode-tag dancing">创建时间:100</span>
                </div>
              </div>
            </div>

            <div>
              <v-avatar
                v-for="n in 4"
                class="avatarC"
                :style="{ zIndex: 5 - n - 1 }"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                ></v-img>
              </v-avatar>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .v-slide-group__content {
  box-sizing: border-box;
  padding: 5px 5px;
  gap: 10px !important;
}
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

.c-newcard {
  width: 100%;
  box-sizing: border-box;
  padding: 70px 30px 70px 70px;
  border-radius: 20px;
  border: 1px rgba(0, 0, 0, 0.12) solid;
  margin-top: 100px;
  display: flex;
  .c-newblog-left {
    flex: 0 0 25%;
    h4 {
      font-size: 40px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
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

.c-opencode {
  margin-top: 100px;
  text-align: center;
  .c-opencode-title {
    font-size: 40px;
  }
  .c-opencode-docs {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  .c-opencode-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
    text-align: left;
    .c-opencode-item {
      flex: 0 0 49%;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 20px;
      border: 1px rgba(0, 0, 0, 0.12) solid;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatarC {
        &:first-child {
          margin-left: 0px !important;
        }
        margin-left: -15px;
      }
      .c-opencode-js {
        p {
          font-size: 14px;
        }
      }
      .c-opencode-tags {
        display: flex;
        gap: 10px;
        .c-opencode-tag {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>
