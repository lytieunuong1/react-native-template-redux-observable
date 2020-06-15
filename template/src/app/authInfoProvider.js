import { storeKey } from "./constants";
import AsyncStorage from "@react-native-community/async-storage";

let auth = null;

class AuthInfoProvider {

  static setAuth(token) {
    if (token) {
      AsyncStorage.setItem(storeKey.token, token)
      auth = {
        authentication_token: token
      }
    } else {
      AsyncStorage.removeItem(storeKey.token)
      auth = null;
    }

  }

  static getAuth() {
    return auth;
  }
}

export { AuthInfoProvider }