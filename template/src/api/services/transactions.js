import { Platform } from "react-native";
import { request } from "~/api/services/base";
import { apiUrl } from "~/api/paths";

const topUp = (receipt) => {
  const data = {
    receiptData: receipt,
    platform: Platform.OS
  }
  return request(apiUrl.topUp, 'post', data)
}

const sendTip = ({sharedType, sharedId, tip, sender, receiver}) => {
  const data = {
    sharedType,
    sharedId,
    tip,
    sender,
    receiver,
    platform: Platform.OS
  }
  return request(apiUrl.sendTip, 'post', data)
}

const getHistories = (filter = undefined) => {
  return request(apiUrl.getHistories, 'get', filter)
}

export default {
  topUp,
  sendTip,
  getHistories
}