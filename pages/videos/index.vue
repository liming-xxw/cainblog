<template>
  <v-container class="d-flex" style="gap: 20px">
    <div class="videos-left">
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
          <div class="about_info_text">前端的技术视频</div>
        </div>
        <div class="d-flex justify-space-between">
          <div class="user-tags">
            <h4>视频数量</h4>
            <p>10</p>
          </div>

          <v-divider vertical></v-divider>
          <div class="user-tags">
            <h4>视频观看</h4>
            <p>100</p>
          </div>
        </div>
      </v-card>
    </div>
    <div class="videos-right">
      <v-card v-for="n in 6" :key="n" max-width="270">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          cover
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>
        </v-card-item>

        <v-card-text>
          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text"> Reserve </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.videos-left {
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
.videos-right {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
