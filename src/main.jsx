import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { Provider } from "react-redux"; // redux
import { store } from "./app/store"; // redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* redux */}
      <CartProvider>
        {" "}
        {/* context */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
