//createAsyncThunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from "services/contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.addContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.deleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// //Асинхронный редакс.

// import * as contactsApi from "services/contactsApi";
// import contactsActions from "redux/contacts-actions";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsApi.fetchContacts();
//     dispatch(contactsActions.fetchContactsOfFirstLoad(contacts));
//     dispatch(contactsActions.fetchContactsSuccess());
//     return contacts;
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError());
//     return [];
//   }
// };

// export const addContact = (contact) => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const response = await contactsApi.addContact(contact);
//     dispatch(contactsActions.addContact(response));
//     dispatch(contactsActions.fetchContactsSuccess());
//     return response;
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError());
//   }
// };

// export const deleteContact = (id) => async (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const response = await contactsApi.deleteContact(id);
//     dispatch(contactsActions.fetchContactsSuccess());
//     return response;
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError());
//   }
// };

// createAsyncThunk
