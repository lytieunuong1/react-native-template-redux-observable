import { Localized } from "~/utils";

const apiError = {
  '1004': Localized.t('errorCodes.invalidEmail'),
  '1005': Localized.t('errorCodes.invalidPassword'),
  '1103': Localized.t('errorCodes.unauthorized'),
  '1104': Localized.t('errorCodes.existedEmail'),
  '1105': Localized.t('errorCodes.wrongEmailOrPassword'),
  '9999': Localized.t('errorCodes.unknown'),
}
export const unknowError = {
  code: "9999",
  message: apiError["9999"]
}

export default getError = code => apiError[code]