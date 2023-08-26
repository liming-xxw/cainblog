<template>
  <v-footer class="c-footer">
    <VContainer style="color: white">
      <div>
        <span class="dancing" style="font-size: 40px;">CainBlog</span>
        <p class="dancing">©2023 cainblog.com</p>
      </div>
      <div class="c-footer-list-box">
        <div class="c-footer-list">
          <div class="dancing">
            <h4>关于Cain博客</h4>

            <div class="c-footer-list-box">
              <div class="c-footer-list-item">关于我们</div>
              <div class="c-footer-list-item">免责声明</div>
            </div>
          </div>
          <div class="dancing">
            <h4>最新博客</h4>

            <div class="c-footer-list-box">
              <div class="c-footer-list-item">关于我们</div>
              <div class="c-footer-list-item">免责声明</div>
            </div>
          </div>
          <div class="dancing">
            <h4>最新视频</h4>

            <div class="c-footer-list-box">
              <div class="c-footer-list-item">关于我们</div>
              <div class="c-footer-list-item">免责声明</div>
            </div>
          </div>
          <div class="dancing">
            <h4>开源项目</h4>

            <div class="c-footer-list-box">
              <div class="c-footer-list-item">关于我们</div>
              <div class="c-footer-list-item">免责声明</div>
            </div>
          </div>
          <div class="dancing">
            <h4>友情链接</h4>

            <div class="c-footer-list-box">
              <div class="c-footer-list-item">关于我们</div>
              <div class="c-footer-list-item">免责声明</div>
            </div>
          </div>
        </div>
      </div>

      <div class="c-footer-code">
        <p class="dancing">Copyright © 2023 cain Built with Docusaurus.</p>
        <p class="dancing">湘ICP备2023001415号-1</p>
      </div>
    </VContainer>
  </v-footer>
</template>

<style lang="scss" scoped>
.c-footer {
  background-color: #154599;
  .c-footer-list-box {
    .c-footer-list {
    
      margin-top: 10px;
      display: flex;
      width: 80%;
      justify-content: space-between;
      .c-footer-list-box {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .c-footer-list-item {
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }

  .c-footer-code {
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
  }
}
</style>
