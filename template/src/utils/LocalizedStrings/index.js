import Localized from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./en";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  Localized.locale = locales[0].languageTag;
}

Localized.fallbacks = true;
Localized.translations = {
  en
};
export default Localized;