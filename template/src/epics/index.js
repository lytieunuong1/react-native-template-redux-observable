import { combineEpics } from "redux-observable";
import { signupEpic } from "~/features/Signup/epics";
import { loginEpic } from "~/features/Login/epics";
import { appGetUserEpic, appStoreUserEpic, appLogoutEpic } from "~/app/epics";


export default combineEpics(
  signupEpic,
  loginEpic,
  appGetUserEpic,
  appStoreUserEpic,
  appLogoutEpic,
);