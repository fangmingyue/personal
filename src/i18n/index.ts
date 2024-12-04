import { createI18n } from "vue-i18n";
import tw from "./tw.json";
import cn from "./cn.json";
import en from "./en.json";

const i18n = createI18n({
  locale: "tw",
  messages: {
    tw,
    cn,
    en,
  },
  fallbackLocale: "tw",
});

export { i18n };
