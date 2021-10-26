import axios from "axios";

axios.defaults.baseURL = "https://616da773a83a850017caa66f.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios("");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("", contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/${id}`);
  return data;
}
