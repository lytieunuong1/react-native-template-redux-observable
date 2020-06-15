import { apiUrl } from "~/api/paths";
import { request } from "./base";

const getBalance = () => {
  return request(apiUrl.getBalance, 'get')
}

export default {
  getBalance,
}