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

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    console.log(error)
    commit('logout')
  }
}

export const addCart = async ({ commit, state }, data) => {
  if (state.token.length === 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請先登入',
      iconColor: '#7e2f28',
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
    router.push('/login')
    return
  }
  if (data.quantity <= 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請輸入正確數量',
      iconColor: '#7e2f28',
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
    return
  }
  try {
    const { data: resData } = await api.post('/users/me/cart', data, {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('updateCart', resData.result)
    swal.fire({
      icon: 'success',
      title: '加入購物車成功',
      iconColor: '#202938',
      buttonsStyling: false,
      background: '#DED7B9',
      confirmButtonText: '關閉',
      width: '20rem'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '加入購物車失敗'
    })
  }
}
