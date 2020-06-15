import { ofType } from "redux-observable";
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import { map, catchError, flatMap } from 'rxjs/operators';
import { api } from "~/api";
import { of } from "rxjs";

export const signupEpic = action$ => {
  return action$.pipe(
    ofType(actionTypes.SIGNUP_REQUEST),
    flatMap(({ params }) => {
      return api.auth.register(params)
    }),
    map(({ data, error }) => {
      if (data) {
        return actions.signupSuccess(data.user)
      } else {
        return actions.signUpFailed(error)
      }
    }),
    catchError(error => {
      return of(actions.signUpFailed(error))
    })
  )
}