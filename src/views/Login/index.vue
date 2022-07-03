<template>
  <div class="page login">
    <div class="bg" :style="{ backgroundImage: 'url(' + bgImage + ')' }"></div>
    <div class="content">
      <div class="content__wrapper">
        <h3>欢迎<span>登陆</span></h3>
        <div class="from">
          <div class="form-item">
            <div class="desc">
              <el-icon>
                <svg
                  t="1656844319924"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1645"
                  width="100"
                  height="100"
                >
                  <path
                    d="M512 321.6m-262.6 0a262.6 262.6 0 1 0 525.2 0 262.6 262.6 0 1 0-525.2 0Z"
                    fill="#ff6146"
                    p-id="1646"
                  ></path>
                  <path
                    d="M924.3 903.6c0-0.1 0-0.1 0 0-0.1-2.1-0.3-4-0.6-5.9C901.2 690.1 725.5 528.6 512 528.6c-213.8 0-389.7 161.9-411.8 369.8-0.2 1.5-0.4 2.9-0.4 4.4 0 0.2-0.1 0.5-0.1 0.7h0.1v1.2c0 22.6 18.3 40.9 40.9 40.9h742.8c22.6 0 40.9-18.3 40.9-40.9 0-0.4-0.1-0.8-0.1-1.1z"
                    fill="#ff6146"
                    p-id="1647"
                  ></path>
                </svg> </el-icon
              ><span>用户名</span>
            </div>
            <el-input
              class="form-input"
              v-model="username"
              placeholder="请输入用户名"
            ></el-input>
          </div>
          <div class="form-item">
            <div class="desc">
              <el-icon>
                <svg
                  t="1656844352258"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1808"
                  width="100"
                  height="100"
                >
                  <path
                    d="M309.4 244.9c22.6 0 41 18.3 41 41v170.8c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V285.9c0.1-22.6 18.4-41 41-41zM713.5 240.9c22.6 0 41 18.3 41 41v23.4c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41v-23.4c0.1-22.6 18.4-41 41-41z"
                    fill="#ff6146"
                    p-id="1809"
                  ></path>
                  <path
                    d="M511.5 120.9c89 0 161.1 72.1 161.1 161.1h81.9c0-134.2-108.8-243-243-243s-243 108.8-243 243h81.9c0-89 72.1-161.1 161.1-161.1zM877.4 932.6V476.8c-3.4-33.4-31-59.7-64.9-61H212.7c-37.5 0-68 30.4-68.1 67.9V928c4 30.2 27.8 54.2 57.9 58.5H824c27-5.5 48.2-26.8 53.4-53.9z"
                    fill="#ff6146"
                    p-id="1810"
                  ></path>
                  <path
                    d="M436.9 701.1c0-22.6 18.3-41 41-41h66.2c22.6 0 41 18.3 41 41 0 22.6-18.3 41-41 41h-66.2c-22.6-0.1-41-18.4-41-41z"
                    fill="#FFFFFF"
                    p-id="1811"
                  ></path>
                </svg>
              </el-icon>
              <span>密码</span>
            </div>

            <el-input
              class="form-input"
              v-model="password"
              placeholder="请输入密码"
              type="password"
              show-password
            ></el-input>
          </div>
        </div>
        <div class="login-btn__wrapper">
          <el-button
            type="primary"
            class="login-btn"
            :loading="loading"
            @click="handleLogin"
            >{{ loadingtext }}</el-button
          >
          <el-button class="login-forget-btn">忘记密码?</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import LocalStorage from '@/utils/LocalStorage';
import { reqLogin } from '@/api';

export default defineComponent({
  setup() {
    const state = reactive({
      username: '',
      password: '',
      loading: false,
      loadingtext: '登录',
      bgImage: require('./assets/bg.png'),
      mStorage: new LocalStorage(true),
      router: useRouter(),
    });
    return {
      ...toRefs(state),
    };
  },
  mounted() {
    this.username = this.mStorage.get('username') || '';
    this.password = this.mStorage.get('password') || '';
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.loadingtext = '登录中';
      try {
        let res = await reqLogin({
          username: this.username,
          password: this.password,
        });
        let { token } = res.data;
        this.mStorage.set('username', this.username);
        this.mStorage.set('password', this.password);
        this.mStorage.set('token', token);
        ElMessage.success(res.msg);
        this.router.push('/');
      } catch (err) {
        console.log(err);
        ElMessage.error(err.msg);
      } finally {
        this.loading = false;
        this.loadingtext = '登录';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .bg {
    width: 60%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    .content__wrapper {
      min-width: 400px;
      h3 {
        font-size: 36px;
        font-weight: 600;
        letter-spacing: 2px;
        span {
          color: $app-primary-color;
        }
      }
      .from {
        margin-top: 60px;
        .form-item {
          margin-top: 30px;
          .desc {
            display: flex;
            align-items: center;
            img {
              width: 16px;
              height: 16px;
            }

            span {
              margin-left: 8px;
            }
          }
          .form-input {
            margin-top: 10px;
            height: 56px;
            :global(.el-input__wrapper) {
              padding: 0 24px;
              background-color: rgba(
                $color: $app-primary-color,
                $alpha: 0.04
              ) !important;
            }
          }
        }
      }
      .login-btn__wrapper {
        display: flex;
        margin-top: 60px;
        .el-button {
          height: 56px;
        }
        .login-btn {
          flex: 6;
        }
        .login-forget-btn {
          flex: 4;
        }
      }
    }
  }
}
</style>
