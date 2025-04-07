import { Routes, Route } from "react-router-dom";
import { useI18n } from "../shared/i18n";

const App = () => {
  const { translate, setLocale } = useI18n();

  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />

      <Route path="/courses">
        <Route path="list" element={<h1>list</h1>} />
        <Route path="watch" element={<h1>watch</h1>} />
        <Route path="action" element={<h1>action</h1>} />
      </Route>
    </Routes>
  );
};
export default App;
