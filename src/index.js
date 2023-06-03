import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { AuthContextProvider } from "./context/authContext";
import { SearchContextProvider } from "./context/SearchContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
    <SearchContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </SearchContextProvider>
    {/* </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
