import { useSelector, useDispatch } from "react-redux";
import React from "react";

import contactsActions from "redux/contacts-actions";
import style from "Phonebook/ContactList/ContactList.module.css";
import { getVisibleContacts } from "redux/contacts-selectors";
import { deleteContact } from "redux/contacts-operations";

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getVisibleContacts);

  async function onClickDeleteContact(id) {
    const statusDelete = await dispatch(deleteContact(id));
    if (statusDelete.type === "contacts/deleteContact/fulfilled") {
      dispatch(contactsActions.deleteContact(id));
    }
  }

  return (
    <ul>
      {items.length > 0 &&
        items.map((item) => (
          <li key={item.id} className={style.contactListItem}>
            <button
              className={style.btnDeleteContact}
              type="button"
              onClick={() => onClickDeleteContact(item.id)}
            >
              delete
            </button>
            {item.name}:{" "}
            <span className={style.numberPhone}>{item.number}</span>
          </li>
        ))}
    </ul>
  );
}
