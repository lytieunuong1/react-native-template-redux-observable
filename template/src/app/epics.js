import { ofType } from "redux-observable";
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import { map, catchError, flatMap } from 'rxjs/operators';
import { api } from "~/api";
import { of, Observable } from "rxjs";
import AsyncStorage from "@react-native-community/async-storage";
import { storeKey } from "~/app/constants";
import { AuthInfoProvider } from "~/app/authInfoProvider";

export const appStoreUserEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.APP_STORE_USER),
    flatMap(({ user }) => {
      return new Observable(async observer => {
        try {
          AuthInfoProvider.setAuth(user.jwtToken)
          await AsyncStorage.setItem(storeKey.currentUser, JSON.stringify(user))
          observer.next({ user })
        } catch (error) {
          // Error saving data
          observer.next({ user, error })
        }
      })
    }),
    map(({ user, error }) => {
      //Ignore the error, if can't store data. the user have to login again
      return actions.appSetUser(user)
    }),
    catchError(error => {
      return of(actions.appError(error))
    })
  )
}

export const appGetUserEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.APP_GET_USER),
    flatMap(() => {
      return new Observable(async observer => {
        try {
          const user = await AsyncStorage.getItem(storeKey.currentUser)
          observer.next({ user: JSON.parse(user) })
        } catch (error) {
          // Error saving data
          observer.next({ error })
        }
      })
    }),
    map(({ user, error }) => {
      if (user) {
        AuthInfoProvider.setAuth(user.jwtToken)
        return actions.appSetUser(user)
      } else {
        return actions.appGetUserFailure(error)
      }
    }),
    catchError(error => {
      return of(actions.appGetUserFailure(error))
    })
  )
}

export const appLogoutEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.APP_LOGOUT_REQUEST),
    flatMap(() => {
      return new Observable(async observer => {
        try {
          await AsyncStorage.removeItem(storeKey.currentUser)
          AuthInfoProvider.setAuth()
          observer.next({ success: true })
        } catch (error) {
          // Error saving data
          observer.next({ error })
        }
      })
    }),
    map(({ success, error }) => {
      if (success) {
        return actions.appLogoutSuccess()
      } else {
        return actions.appLogoutFailure(error)
      }
    }),
    catchError(error => {
      return of(actions.appLogoutFailure(error))
    })
  )
}
