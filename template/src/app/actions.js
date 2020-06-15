import * as actionTypes from './actionTypes'

export const appSetUser = (user) => ({
  type: actionTypes.APP_SET_USER,
  user
})

export const appGetUser = () => ({
  type: actionTypes.APP_GET_USER,
})

export const appGetUserFailure = () => ({
  type: actionTypes.APP_GET_USER_FAILURE,
})

export const appStoreUser = (user) => ({
  type: actionTypes.APP_STORE_USER,
  user
})

export const appError = (error) => ({
  type: actionTypes.APP_ERROR,
  error
})

export const appLogout = () => ({
  type: actionTypes.APP_LOGOUT_REQUEST
})

export const appLogoutFailure = () => ({
  type: actionTypes.APP_LOGOUT_FAILURE
})

export const appLogoutSuccess = () => ({
  type: actionTypes.APP_LOGOUT_SUCCESS
})


export const appGetBalance = () => ({
  type: actionTypes.APP_GET_BALANCE_REQUEST
})

export const appGetBalanceFailure = (error) => ({
  type: actionTypes.APP_GET_BALANCE_FAILURE,
  error
})

export const appGetBalanceSuccess = (balance) => ({
  type: actionTypes.APP_GET_BALANCE_SUCCESS,
  balance
})

export const appSetDeepLink = (deepLink) => ({
  type: actionTypes.APP_SET_DEEP_LINK,
  deepLink
})
