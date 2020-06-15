import * as actionTypes from './actionTypes';
import { APP_STORE_USER } from '~/app/actionTypes';

const initialState = {
  isLoading: false,
  error: undefined,
  user: undefined
}
export default loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        user: undefined,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user
      }
    case actionTypes.LOGIN_FAILURE:
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