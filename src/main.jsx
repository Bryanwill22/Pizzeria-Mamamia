import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Cart from "./View/Cart.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import GlobalProvider from "./contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </GlobalProvider>
  </StrictMode>,
);
