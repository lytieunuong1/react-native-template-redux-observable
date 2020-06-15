import { ofType } from "redux-observable";
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import { map, catchError, flatMap } from 'rxjs/operators';
import { api } from "~/api";
import { of } from "rxjs";

export const loginEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.LOGIN_REQUEST),
    flatMap(({ params }) => {
      return api.auth.login(params)
    }),
    map(({ data, error }) => {
      if (data) {
        return actions.loginSuccess(data.user)
      } else {
        return actions.loginFailed(error)
      }
    }),
    catchError(error => {
      return of(actions.loginFailed(error))
    })
  )
}