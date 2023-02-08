import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

//PersistGate:(리덕스 스토어에 유지시키고자 하는 데이터를 정상적으로 저장되고 불러 올 수 있게) ui 렌더링을 지연시키는 역할
//loading:ui 렌더링의 지연시간

const persistor = persistStore(store); //리덕스 데이터를 유지시킬 수 있는 리덕스 스토어 생성
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
