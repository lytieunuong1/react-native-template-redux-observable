// export const baseUrl = "http://192.168.1.180:5000/api/v1/";
export const baseUrl = "https://api.sendtip.live/api/v1/";
export const webUrl = "https://sendtip.live/";
export const termsUrl = `${webUrl}tos`;
export const privacyUrl = `${webUrl}privacy`;
export const apiUrl = {
  signup: baseUrl + "auth/register",
  login: baseUrl + "auth/login",
  getBalance: baseUrl + "user/getBalance",
  topUp: baseUrl + "transactions/topUp",
  sendTip: baseUrl + "transactions/sendTip",
  getHistories: baseUrl + "transactions/histories",
}

const getInstagramLink = (deepLink) => {
  const [, receiverName] = deepLink.receiver.split('-')
  const instagramLink = 'https://instagram.com/'
  switch (deepLink.sharedType) {
    case 'live_viewer_invite':
      return `${instagramLink}${receiverName}/live`
    case 'media_share':
      return `${instagramLink}p/${deepLink.sharedId}`
    case 'story_share':
      return `${instagramLink}stories/${receiverName}/${deepLink.sharedId}`
    default:
      return ''
  }
}

export const extractDeepLink = (deepLink = '') => {
  const urlScheme = "sendtiplive://"
  const removedRoot = deepLink.includes(webUrl) ? deepLink.split(webUrl) : deepLink.split(urlScheme)
  if (removedRoot.length < 2) return undefined
  const [type, sharedType, sharedId, receiver, sender] = removedRoot[1].split('/')

  const data = {
    type,
    sharedType,
    sharedId,
    receiver,
    sender
  }
  return {
    ...data,
    instagramLink: getInstagramLink(data)
  }
  // const regex = /(?<type>send|claim)\/(?<liveId>[0-9]*)\/(?<receiverId>[0-9]*)-(?<receiverName>([0-9]|[a-z]|[A-Z]|.|_)*)\/(?<senderId>[0-9]*)-(?<senderName>([0-9]|[a-z]|[A-Z]|.|_)*)/;
  // const found = removedRoot[1].match(regex);
  // if (found.groups) {
  //   return found.groups
  // }
  // return undefined

}
