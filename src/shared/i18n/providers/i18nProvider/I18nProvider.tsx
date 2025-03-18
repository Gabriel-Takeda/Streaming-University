import { createContext, useEffect, useMemo, useState } from "react";
import locales from "../../locales";
import { IntlProvider } from "react-intl";

type LocalesType = keyof typeof locales;

interface I18nProviderContext {
  locale: LocalesType;
  updateLocale: (locale: LocalesType) => unknown;
  isPtBr: boolean;
}

const defaultLocale = "pt-BR";

const language = Object.keys(locales).includes(navigator.language)
  ? (navigator.language as LocalesType)
  : defaultLocale;

const I18nProviderContext = createContext<I18nProviderContext>({
  locale: language,
  updateLocale: () => undefined,
  isPtBr: language === "pt-BR",
});

interface LocaleProviderProps {
  locale?: LocalesType;
  children?: React.ReactNode;
}

const I18nProvider: React.FC<LocaleProviderProps> = ({
  locale: initLocale = language,
  children,
}) => {
  const [locale, setLocale] = useState<LocalesType>(
    (localStorage.getItem("APP:LOCALE") || initLocale) as LocalesType
  );
  const [message, setMessage] = useState(locales[locale]);
  const updateLocale = (locale: LocalesType) => {
    localStorage.setItem("APP:LOCALE", locale);
    setLocale(locale);
  };

  useEffect(() => {
    setMessage(locales[locale]);
  }, [locale]);

  const providerValue = useMemo(
    () => ({
      locale,
      updateLocale,
      isPtBr: locale === "pt-BR",
    }),
    [locale, updateLocale]
  );

  return (
    <I18nProviderContext.Provider value={providerValue}>
      <IntlProvider
        locale={locale}
        messages={message}
        defaultLocale={language}
        wrapRichTextChunksInFragment={true}
      >
        {children}
      </IntlProvider>
    </I18nProviderContext.Provider>
  );
};

export { I18nProviderContext, I18nProvider };
