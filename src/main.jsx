import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/globalStyles";
import CSSVariables from "./styles/variables";
import { StyleProvider } from './contexts/StyleContext';

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <CSSVariables />
    <StyleProvider>
      <AppRoutes />
    </StyleProvider>
  </>
);
