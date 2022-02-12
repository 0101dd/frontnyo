import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

// 登入 ------------------------------------------
export const login = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    commit('login', data.result)
    router.push('/')
    swal.fire({
      icon: 'success',
      iconColor: '#202938',
      title: '登入成功',
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '登入失敗',
      text: error.response.data.message,
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
  }
}

// 登出 ------------------------------------------
export const logout = async ({ commit, state }) => {
  try {
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/')
    swal.fire({
      icon: 'success',
      iconColor: '#202938',
      title: '登出成功',
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message,
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
  }
}
