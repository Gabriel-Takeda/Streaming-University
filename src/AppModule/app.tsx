import { useI18n } from "../shared/i18n";

const App = () => {
  const { translate } = useI18n();

  return <h1 style={{ color: "pink" }}>{translate({ id: "welcome" })}teste</h1>;
};

export default App;
