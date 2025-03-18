import { I18nProvider } from "./i18n";

const SharedModule: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <I18nProvider>{children}</I18nProvider>;

export default SharedModule;
