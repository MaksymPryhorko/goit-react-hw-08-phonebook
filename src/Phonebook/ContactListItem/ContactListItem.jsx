import { useDeleteContactMutation } from "redux/contacts-rtkq";
import { useEffect } from "react";
import { Notify } from "notiflix";

import style from "Phonebook/ContactListItem/ContactListItem.module.css";

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error.status}`);
    }
  }, [error]);

  return (
    <li key={id} className={style.contactListcontact}>
      <button
        className={style.btnDeleteContact}
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {name}: <span className={style.numberPhone}>{number}</span>
    </li>
  );
}
