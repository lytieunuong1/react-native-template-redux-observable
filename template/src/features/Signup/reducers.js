import * as actionTypes from './actionTypes';
import { APP_STORE_USER } from '~/app/actionTypes';

const initialState = {
  isLoading: false,
  error: undefined,
  signupSuccess: false,
  user: undefined
}
export default signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        user: undefined,
        isSignupSuccess: false
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignupSuccess: true,
        user: action.user
      }
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case APP_STORE_USER:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}