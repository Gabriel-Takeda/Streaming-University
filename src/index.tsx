import * as ReactDOM from "react-dom/client";
import SharedModule from "./shared";
import App from "./AppModule/app";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <SharedModule>
    <App />
  </SharedModule>
);
