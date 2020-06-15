import { apiUrl } from "~/api/paths";
import { request } from "./base";

const login = (params) => {
  return request(apiUrl.login, 'post', params)
}

const register = (params) => {
  return request(apiUrl.signup, 'post', params)
}

export default {
  register,
  login,
}