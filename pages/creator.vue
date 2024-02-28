<script setup lang="ts">
const router = useRouter()
let activeMenu = ref('');
let menuList = reactive([
  { name: '创作首页', icon: '', url: '/creator/home', children: [] },
  {
    name: '内容管理', icon: '', url: '/creator/content', children: [
      { name: '文章管理', icon: '', url: '/creator/content/article' },
      { name: '评论管理', icon: '', url: '/creator/content/comment' },
    ]
  },
  {
    name: '数据报表', icon: '', url: '/creator/data', children: [
      { name: '文章数据', icon: '', url: '/creator/data/article' },
      { name: '粉丝数据', icon: '', url: '/creator/data/fans' },
    ]
  },
  {
    name: '帮助中心', icon: '', url: '/creator/help', children: [
      { name: '常见问题', icon: '', url: '/creator/help/familiarIssue' },
    ]
  },
  {
    name: '设置', icon: '', url: '/creator/setting', children: [
      { name: '创作设置', icon: '', url: '/creator/setting/creator' },
    ]
  },
]);
const handleMenu = (menu: any) => {
  console.log(menu.url);
  activeMenu.value = menu.name;
  if (!menu.url) return;
  router.push({ path: menu.url })
};
</script>

<template>
  <div class="wrap">
    <div class="container">
      <div class="left-box-card">
        <div class="sidebar-menu-box">
          <div class="creator-user">
            <div class="user-avatar">
              <img src="@/assets/images/vue.svg"/>
            </div>
            <div class="user-name">你的Maya</div>
          </div>

          <div class="write-article">
            <!-- <my-button type="primary" icon="icon-dianzan1">写文章</my-button> -->
            <button>icon-dianzan1 写文章</button>
          </div>

          <div class="sidebar-menu-submenu" v-for="menu in menuList" :key="menu.name">
            <div :class="['sidebar-menu-item', activeMenu == menu.name && menu.url ? 'active-menu' : '']"
              @click="handleMenu(menu)">{{ menu.name }}</div>
            <div
              :class="['sidebar-menu-item', 'sidebar-menu-item-children', activeMenu == item.name ? 'active-menu' : '']"
              v-for="item in menu.children" :key="item.name" @click="handleMenu(item)">
              <span>{{ item.name }}</span>
            </div>
          </div>

        </div>
      </div>
      <div class="right-box-card">
        <NuxtPage />
        <!-- <router-view class="main" /> -->
        <!-- <div v-for="(item, index) in 800" :key="index">{{ index }}</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  background-color: aliceblue;
}

.container {
  position: relative;
  margin: auto;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: $container-min-width;
  min-height: calc(100vh - $nav-height);
}

// 左边盒子
.left-box-card {
  width: 220px;
  margin-right: 15px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}

.right-box-card {
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0px rgba(122 192 241 / 30%);
}

.sidebar-menu-box {
  padding: 8px;
  color: #909399;

  .creator-user {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px 5px;

    .user-name {
      margin-left: 15px;
    }
  }

  .write-article {
    margin: 20px 0px;
    // .btn{
    // 	width: 100%;
    // 	padding: 8px 20px;
    // 	color: #fff;
    // 	font-size: 14px;
    // 	border-radius: 4px;
    // 	background-color: #3c9cff;
    // 	& .iconfont{
    // 		margin-right: 5px;
    // 	}
    // }
  }

  .sidebar-menu-item {
    cursor: pointer;
    text-align: left;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 14.5px;
    font-weight: 500;

    &:hover {
      border-radius: 3px;
      background: #e8f3ff;
      color: #1d7dfa;
    }
  }

  .sidebar-menu-item-children {
    padding-left: 20px;
  }

  .active-menu {
    border-radius: 3px;
    background: #e8f3ff;
    color: #1d7dfa;
  }
}</style>