import * as actionTypes from './actionTypes'

export const login = (params) => ({
  type: actionTypes.LOGIN_REQUEST,
  params
})

export const loginFailed = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  error
})

export const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  user
})

