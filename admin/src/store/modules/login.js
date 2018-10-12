/**
 * Created by chelin on 2018/10/12
 */

const login = {
  state: {
    visible: false
  },
  mutations: {
    TOGGLE_MODAL: (state) => {
      state.visible = !state.visible
    }
  },
  actions: {
    DisplayLogin({commit}) {
      console.log('显示弹出框')
      commit('TOGGLE_MODAL')
    },
    ReLogin({commit}) {
      commit('TOGGLE_MODAL')
      return new Promise(resolve => {
        resolve()
      })
    }
  }
}

export default login;
