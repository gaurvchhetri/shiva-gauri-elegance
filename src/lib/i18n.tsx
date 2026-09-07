import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { translations, type Lang, type TranslationKey } from "@/data/translations";
import type { Bilingual } from "@/data/products";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
  tx: (value: Bilingual) => string;
  productMessage: (name: string) => string;
  generalMessage: () => string;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "sgt-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ne") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(() => {
    const dict = translations[lang];
    return {
      lang,
      setLang,
      t: (key) => {
        const entry = dict[key];
        return typeof entry === "string" ? entry : "";
      },
      tx: (v) => v[lang],
      productMessage: (name) => dict["msg.product"](name),
      generalMessage: () => dict["msg.general"],
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
