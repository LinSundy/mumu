import { login, logout, getInfo } from '@/api/login';
import { getToken, removeToken, setToken } from '@/utils/auth';
import { Message } from 'element-ui';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    }
  },

  actions: {
    // 登录
    Login({ commit, dispatch }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(response => {
            const data = response.data;
            if (data.status === 1) {
              setToken(data.username)
              commit('SET_USERNAME', data.username);
              commit('SET_ROLES', data.roles);
              commit('SET_TOKEN', data.token);
            } else if (data.status === 0) {
              Message.error('用户名未找到');
            } else {
              Message.error('用户名密码错误');
            }
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({commit}) {
      getInfo().then(res => {
        const data = res && res.data;
        if (data.roles) {
          commit('SET_ROLES', data.roles);
        } else {
          Message.error('无权限');
        }
        commit('SET_NAME', data.name);
        commit('SET_AVATAR', data.avatar);
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        console.log(logout(), 'logout返回')
        logout()
          .then(() => {
            commit('SET_NAME', '');
            commit('SET_AVATAR', '');
            commit('SET_TOKEN', '');
            commit('SET_ROLES', '');
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      console.log('执行前端登出');
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
