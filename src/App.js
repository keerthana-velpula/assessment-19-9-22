import React, { StrictMode } from "react";
import Header from "./Header";
import AppRoutes from "./routes";
export const App = () => {
  return (
    <StrictMode>
      <Header/>
    <AppRoutes />
    </StrictMode>
  );
};
export default App;
