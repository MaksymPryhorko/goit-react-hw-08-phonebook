import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "redux/contacts-reducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
