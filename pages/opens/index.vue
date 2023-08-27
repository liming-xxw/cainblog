<template>
  <v-container>
    <h4 class="open-title">开源项目</h4>
    <p class="open-dosc">
      你好，这里是我的一个开源作品合集，维护一些我认为可能有用的作品，但是个人的精力毕竟还是有限，所以也希望有志同道合的同学一起，如果对下面的开源项目敢兴趣的话可以点击申请按钮发送一封邮件来一起，也可以直接在github上直接提交
    </p>
    <div class="open-box">
      <v-card class="open-card" v-for="n in 5" :key="n">
        <div class="d-flex" style="gap: 20px">
          <div>
            <v-avatar color="info" size="64">
              <v-icon icon="mdi-vuetify"></v-icon>
            </v-avatar>
          </div>
          <div class="open-card-dosc">
            <div class="open-card-dosc-title-box d-flex justify-space-between">
              <h4 class="open-card-dosc-title">Cain.js</h4>
              <p class="open-card-dosc-star">
                <v-icon>mdi-star</v-icon>
                100
              </p>
            </div>

            <p class="open-card-dosc-dosc">一个轻巧，简便的JavaScript框架</p>
            <div class="open-card-dosc-member">
              <v-avatar
                v-for="n in 4"
                class="avatarC"
                :style="{ zIndex: 5 - n - 1 }"
                size="30"
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                ></v-img>
              </v-avatar>
            </div>
            <div class="mt-2">
              <v-btn size="small" flat color="cainblue"> 加入我们</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.open-title {
  font-size: 40px;
}
.open-dosc {
  font: 14px;
  color: rgba(0, 0, 0, 0.4);
}
.open-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  justify-content: space-between;
  .open-card {
    width: 49%;
    box-sizing: border-box;
    padding: 20px;
    .avatarC {
      &:first-child {
        margin-left: 0px !important;
      }
      margin-left: -10px;
    }
    .open-card-dosc {
      flex: 1;
      .open-card-dosc-title {
        font-size: 18px;
      }
      .open-card-dosc-star {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
      }
    }
    .open-card-dosc-dosc {
      font-size: 14px;
    }
    .open-card-dosc-member {
      margin-top: 5px;
    }
  }
}
</style>
