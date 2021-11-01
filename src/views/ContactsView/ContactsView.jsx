import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Notify } from "notiflix";

import Form from "components/Form";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import style from "./ContactsView.module.css";
import { getError, getIsLoading } from "redux/contacts/contacts-selectors";
import { fetchContacts } from "redux/contacts/contacts-operations";
import Loading from "react-loader-spinner";

export default function ContactsView() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error}`);
    }
  }, [error]);

  // useEffect(() => {
  //   error && alert(errorState);
  // });

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <section className={style.mainSection}>
      <h1>Phonebook</h1>
      <Form />

      <div className={style.containerContacts}>
        <h2>Contacts:</h2>
        <Filter />
        {isLoading && (
          <Loading type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        <ContactList />
      </div>
    </section>
  );
}
