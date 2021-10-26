import { createReducer } from "@reduxjs/toolkit";

import contactsActions from "redux/contacts-actions";

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default filter;
