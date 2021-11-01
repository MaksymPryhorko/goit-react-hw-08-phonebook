//createAsyncThunk

import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const changeFilter = createAction("contacts/changeFilter");

export default {
  addContact,
  deleteContact,
  changeFilter,
};

// //Асинхронный редакс.
// import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("contacts/addContact");
// const deleteContact = createAction("contacts/deleteContact");
// const changeFilter = createAction("contacts/changeFilter");
// const fetchContactsOfFirstLoad = createAction("contacts/fetchContactsRequest");
// const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
// const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
// const fetchContactsError = createAction("contacts/fetchContactsError");

// export default {
//   fetchContactsOfFirstLoad,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
//   addContact,
//   deleteContact,
//   changeFilter,
// };
