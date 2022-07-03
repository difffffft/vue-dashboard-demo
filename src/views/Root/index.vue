<template>
  <el-container class="page home">
    <el-aside>
      <div class="menu-logo">
        <img src="@/assets/menu_logo.png" alt="" />
      </div>
      <el-menu
        active-text-color="#FF6146"
        background-color="#FFF"
        :default-active="defaultMenuActive"
        text-color="#666"
        @open="handleOpen"
        @close="handleClose"
        @select="handleMenuSelect"
      >
        <div v-for="(v, k) in menus" :key="k">
          <div v-if="v.show">
            <el-menu-item
              :index="v.path"
              v-if="!v.children || v.children.length === 0"
            >
              <el-icon><component :is="v.icon"></component></el-icon>
              <span>{{ v.title }}</span>
            </el-menu-item>
            <el-sub-menu :index="v.path" v-else>
              <template #title>
                <el-icon><component :is="v.icon"></component></el-icon>
                <span>{{ v.title }}</span>
              </template>
              <el-menu-item
                :index="j.path"
                v-for="(j, i) in v.children"
                :key="i"
                :title="j.title"
                v-show="j.show"
              >
                <span class="children-menu">{{ j.title }}</span>
              </el-menu-item>
            </el-sub-menu>
          </div>
        </div>
      </el-menu>
    </el-aside>
    <el-container class="main">
      <el-header v-if="breadcrumbs.length > 1">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: defaultMenuActive }">{{
            defaultMenuTitle
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import LocalStorage from '@/utils/LocalStorage';
import { reqLogin } from '@/api';
import useMenus from '@/hooks/useMenus';
import { ArrowRight } from '@element-plus/icons-vue';

const breadcrumbs = reactive([]);
const router = useRouter();
const menus = useMenus();
const defaultMenuActive = ref(router.currentRoute.value.path);
const defaultMenuTitle = ref('某某');

const handleOpen = () => {};
const handleClose = () => {};
const handleMenuSelect = (index, indexPath) => {
  defaultMenuActive.value = index;

  router.push(defaultMenuActive.value);
};
const handleGoBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #ededed;
  padding: 20px;
  .el-aside {
    margin-right: 20px;
    max-width: 240px;
    height: 100%;
    background-color: white;
    border-radius: $app-radius;
    .menu-logo {
      width: 100%;
      height: 80px;
      display: grid;
      place-items: center;
      padding-left: 30px;
      padding-right: 30px;
      img {
        width: 100%;
      }
    }
    .el-menu {
      border: 0;
      margin: 0 10px;
      .el-menu-item {
        border-radius: $app-radius;
      }
      .el-menu-item:hover {
        background: lighten($color: $app-primary-color, $amount: 30%);
      }
      .is-active {
        background: lighten($color: $app-primary-color, $amount: 30%);
      }

      .is-active.el-menu-item {
        font-weight: 900;
      }
    }

    .children-menu {
      font-size: 12px;
    }
  }

  .el-aside::-webkit-scrollbar {
    width: 8px;
    background-color: rgb(146, 97, 97);
  }

  .el-aside::-webkit-scrollbar-track {
    background-color: #eaeaea;
  }

  .el-aside::-webkit-scrollbar-thumb {
    background-color: #b4b4b4;
  }

  .main {
    width: 100%;
    height: 100%;

    .el-header {
      height: 80px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .el-header,
    .el-main {
      border-radius: $app-radius;
      background-color: white;
    }
  }
}
</style>
