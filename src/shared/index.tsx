import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../global";
import { I18nProvider } from "./i18n";
import { defaultTheme } from "../styles/default";
import { BrowserRouter } from "react-router-dom";

const SharedModule: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <I18nProvider>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        {children}
      </BrowserRouter>
    </ThemeProvider>
  </I18nProvider>
);

export default SharedModule;
