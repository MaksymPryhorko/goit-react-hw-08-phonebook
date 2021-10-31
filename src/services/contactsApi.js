import axios from "axios";

// axios.defaults.baseURL = "https://616da773a83a850017caa66f.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
