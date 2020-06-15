import * as actionTypes from './actionTypes'

export const signup = (params) => ({
  type: actionTypes.SIGNUP_REQUEST,
  params
})

export const signUpFailed = (error) => ({
  type: actionTypes.SIGNUP_FAILURE,
  error
})

export const signupSuccess = (user) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  user
})

