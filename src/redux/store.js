import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "redux/contacts-reducer";
import { contactsApi } from "redux/contacts-rtkq";

const store = configureStore({
  reducer: {
    filter: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

export default store;
