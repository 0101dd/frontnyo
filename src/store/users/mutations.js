export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state.userId = data._id
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
  state.role = 0
  state.email = ''
  state.cart = 0
  state.userId = ''
}

export const getInfo = (state, data) => {
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state.userId = data._id
}

export const extend = (state, data) => {
  state.token = data
}

export const updateCart = (state, data) => {
  state.cart = data
}
