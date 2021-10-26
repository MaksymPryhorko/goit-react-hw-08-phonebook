// createAsyncThunk

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactsActions from "redux/contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "redux/contacts-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});

//Асинхронный редакс.

// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";

// import contactsActions from "redux/contacts-actions";

// const items = createReducer([], {
//   [contactsActions.addContact]: (state, { payload }) => [...state, payload],
//   [contactsActions.fetchContactsOfFirstLoad]: (_, { payload }) => payload,
//   [contactsActions.deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const filter = createReducer("", {
//   [contactsActions.changeFilter]: (_, { payload }) => payload,
// });

// const isLoading = createReducer(false, {
//   [contactsActions.fetchContactsRequest]: () => true,
//   [contactsActions.fetchContactsSuccess]: () => false,
//   [contactsActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//   [contactsActions.fetchContactsError]: (_, { payload }) => payload,
//   [contactsActions.fetchContactsRequest]: () => null,
// });

// export default combineReducers({
//   items,
//   filter,
//   isLoading,
//   error,
// });
