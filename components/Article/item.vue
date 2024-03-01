<template>
  <div class="article-box">
    <div class="article-item">
      <div class="article-item-left">
        <div class="row-one">
          <span>你的Maya</span>
          <span>3天前</span>
          <span>娱乐</span>
        </div>
        <div class="row-two" @click="$router.push({ name: 'Details', params: { article_id: `${article.id}` } })">
          <h2 :title="article.title">{{ article.title }}</h2>
        </div>
        <div class="row-three" @click="$router.push({ name: 'Details', params: { article_id: `${article.id}` } })">
          <p class="item-content" v-text="article.content"></p>
        </div>
        <div class="row-four">
          <a>
            <i class="iconfont icon-liulan"></i>
            {{ article.read_count }}
          </a>
          <a>
            <i class="iconfont icon-dianzan1"></i>
            {{ article.like_count }}
          </a>
          <a @click="$router.push(`/details/${article.id}#comment`)">
            <i class="iconfont icon-31pinglun"></i>
            {{ article.comment_count }}
          </a>
          <a @click="clickAccusation(article.id)"><i class="iconfont icon-gengduo"></i></a>
        </div>
      </div>
      <div class="article-item-right" @click="$router.push({ name: 'Details', params: { article_id: `${article.id}` } })">
        <img src="~/assets/images/vue.svg" alt="" /></div>
    </div>
    <!-- 举报文章组件 -->
    <!-- <Report v-if="showAccusation" :showAccusation="showAccusation" :articleId="articleId" @showAccusation="showAccusation = false" /> -->
    <ArticleReport v-if="showAccusation" :showAccusation="showAccusation" :articleId="articleId" @showAccusation="showAccusation = false"/>
  </div>
</template>

<script setup lang="ts">
let article = ref({
  id: 1,
  title: '英雄一笑为红颜,红颜一笑为了钱',
  content: "英雄一笑为红颜,红颜一笑为了钱",
  read_count: "",
  like_count: "",
  comment_count: "",
})
let showAccusation = ref(false);
let articleId = ref(0);
const clickAccusation = id => {
  console.log(id);
  articleId.value = id;
  showAccusation.value = !showAccusation.value ;
};
</script>


<style lang="scss" scoped>
.article-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #eef2f4;

  &:hover {
    cursor: pointer;
    background: #fafafa;
  }
}

.article-item-left {
  flex: 1;
  margin-right: 15px;

  .row-one {

    span:first-child,
    span:last-child {
      &:hover {
        color: #347aeb;
      }
    }

    span:first-child {
      padding: 0 8px 0 0;
      color: #434445;
      border: none;
    }

    span {
      padding: 0 8px;
      border-left: 1px solid #dee0e2;
    }

    color: #86909c;
    font-weight: 500;
    font-size: 13px;
  }

  .row-two {
    h2 {
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .row-three {
    font-size: 13px;
    color: #86909c;

    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden; //隐藏文字
    }
  }

  .row-four {
    display: flex;
    font-size: 14px;

    i {
      color: rgb(160, 150, 150);
      margin-right: 4px;

      &:hover {
        color: #347aeb;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: #4e5969;
      margin-right: 15px;
    }
  }
}

.article-item-right {
  display: flex;
  width: 150px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}</style>
