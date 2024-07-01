<template>
  <div class="success">
    <div class="success-card">
      <a class="success-card-title" href="#">
        <Icon name="ep:arrow-left" />
        <span>内容管理</span>
      </a>
      <div class="success-card-content">
        <img class="content-img" src="@/assets/images/creation/success-icon.png">
        <div class="content-title">发布成功！正在审核中</div>
      </div>
      <div class="success-card-article">
        <ArticleItem></ArticleItem>
      </div>
      <div class="success-card-footer">
        <el-button round>查看文章</el-button>
        <el-button round>重新编辑</el-button>
        <el-button round plain type="primary">再写一篇</el-button>
      </div>
      <div class="success-card-share">
        <div class="share-to-title">
          <span class="border"></span>
          <span class="text">分享至</span>
          <span class="border"></span>
        </div>
        <div class="share-to-cont">
          <div class="share-btn">
            <div class="icon bg-#59c239">
              <i class="iconfont icon-weixin"></i>
            </div>
            <div class="text">微信</div>
          </div>
          <div class="share-btn">
            <div class="icon bg-#01c6f7">
              <i class="iconfont icon-qq"></i>
            </div>
            <div class="text">QQ</div>
          </div>
          <div class="share-btn">
            <div class="icon bg-#f95e5c">
              <i class="iconfont icon-xinlangweibo"></i>
            </div>
            <div class="text">微博</div>
          </div>
          <div class="share-btn">
            <div class="icon bg-#f2c83e">
              <i class="iconfont icon-lianjie"></i>
            </div>
            <div class="text">链接</div>
          </div>
          <div class="share-btn">
            <div class="icon bg-#56d8c9">
              <i class="iconfont icon-24gf-pictures"></i>
            </div>
            <div class="text">海报</div>
          </div>
          <div class="share-btn">
            <div class="icon bg-#ccccd8">
              <i class="iconfont icon-gengduo1"></i>
            </div>
            <div class="text">更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.success {
  position: relative;
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  background-color: #f5f6f7;

  .success-card {
    position: absolute;
    // width: 1200px;
    width: 660px;
    max-width: 800px;
    min-width: 560px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 25%);
    padding: 24px;
    border-radius: 2px;
    border: 1px solid #f0f0f5;
    background-image: url(https://mp-blog.csdn.net/mp_blog/img/success-bg.4fb05392.png);
    background-size: cover;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .05);

    .success-card-title {
      font-size: 14px;
      font-weight: 400;
      color: #555666;
      line-height: 24px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    .success-card-content {
      text-align: center;

      .content-img {
        // margin-top: 4px;
        height: 68px;
        margin-bottom: 10px;
      }

      .content-title {
        height: 28px;
        font-size: 18px;
        font-weight: 500;
        color: #222226;
        line-height: 28px;
      }
    }

    .success-card-article {
      margin-top: 12px;
      overflow: hidden;
      border-radius: 12px;
      background: rgba(232, 232, 237, .4);
    }

    .success-card-footer {
      margin-top: 15px;
      text-align: center;
      :deep(.el-button){
        font-weight: 400;
      }
    }

    .success-card-share {
      .share-to-title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 380px;
        margin: 0 auto;
        margin-top: 16px;
        margin-bottom: 20px;

        .border {
          border-bottom: 1px dashed #ccc;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          height: 1px;
        }

        .text {
          font-size: 12px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          margin: 0 16px;
          color: #777888;
        }
      }

      .share-to-cont {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 0 auto;
        width: 380px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;

        .share-btn {
          cursor: pointer;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 40px;
            height: 40px;
          }

          .iconfont {
            color: white;
          }

          .text {
            font-size: 12px;
            font-weight: 400;
            color: #777888;
            margin-top: 8px;
            text-align: center;
          }
        }

      }
    }
  }
}
</style>