import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { todoReducer } from "../modules/todo";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; //로컬스토리지
//import storage from "redux-persist/lib/storage/session"; //세션스토리

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"], //저장할 리덕스 모듈
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

//redux-persist와 리덕스 모듈정보를 종합하여 persist정보를 반환
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
