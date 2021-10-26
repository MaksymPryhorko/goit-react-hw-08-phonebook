import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";
import { getError, getIsLoading } from "../redux/contacts-selectors";
import { fetchContacts } from "redux/contacts-operations";
import Loading from "react-loader-spinner";

export default function Phonebook() {
  const dispatch = useDispatch();
  const errorState = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    errorState && alert(errorState);
  });

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
