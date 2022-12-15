import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { rootReducer } from "./kkuda/reducers/store";

import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import ScrollToTop from "./ScrollTop";

if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
}

const persistConfig = {
    key: "info",
    storage: storageSession,
    whiteList: ["userInfo", "productInfo", "loginInfo", "partnerInfo", "productList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
