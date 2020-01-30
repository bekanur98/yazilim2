// helper/localize

import React from "react";
import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import { store } from './../../store';
import { changeLangAction } from './../../actions/settingsAction';

interface KeyVal {
  [key: string]: string;
}

const translationGetters: any = {
  // lazy requires (metro bundler does not support symlinks)
  en: (): any => require("./lan-en.json"),
  ru: (): any => require("./lan-ru.json"),
  kg: (): any => require("./lan-kg.json")
};

export const getLocale = ():('en' | 'ru' | 'kg') => {
  return i18n.locale
}

export const trans = memoize(
  (key: string, config: KeyVal) => i18n.t(key, config),
  (key: string, config: KeyVal) => (config ? key + JSON.stringify(config) : key)
);

export const setupLocalization = (lang = '') => {
  const langForce = lang ? { languageTag: lang, isRTL: false } : null;
  const { languageTag, isRTL } =
    langForce ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    { languageTag: "en", isRTL: false };

  // clear translation cache
  trans.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;

  // dispatch redux
  setTimeout(() => {
    store.dispatch(changeLangAction(languageTag))
  }, 0)
};




