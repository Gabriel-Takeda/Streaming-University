import { useContext } from 'react';
import { useIntl } from 'react-intl';
import locales from '../../locales';
import { I18nProviderContext } from '../../providers/i18nProvider/I18nProvider';

const useI18n = () => {
    const i18nProvider = useIntl();
    const translate = i18nProvider.formatMessage;
    const { locale, updateLocale, isPtBr } = useContext(I18nProviderContext);
    const setLocale = (locale: keyof typeof locales) => {
        updateLocale(locale);
    };

    return { locale, setLocale, translate, i18nProvider, isPtBr };
};

export default useI18n;
