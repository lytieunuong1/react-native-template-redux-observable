import { showMessage } from "react-native-flash-message";
import { Linking } from "react-native";

export const showErrorMessage = (message) => {
  showMessage({
    message: message,
    type: 'danger'
  })
}

export const showSuccessMessage = (message) => {
  showMessage({
    message: message,
    type: 'success'
  })
}

export const renderItemKey = (item, index) => index + ''

export const openLink = (link) => {
  if (!link) return
  Linking.canOpenURL(link).then(supported => {
    supported && Linking.openURL(link)
  }, error => {
    showErrorMessage(error)
  })
}