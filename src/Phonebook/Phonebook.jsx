import { useFetchContactsQuery } from "redux/contacts-rtkq";
import { useEffect } from "react";
import { Notify } from "notiflix";

import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";
import Loading from "react-loader-spinner";

export default function Phonebook() {
  const { data, error, isFetching } = useFetchContactsQuery("");

  useEffect(() => {
    if (error) {
      Notify.failure(`Error: ${error.status} ${error.data}`);
    }
  }, [error]);

  return (
    <section className={style.mainSection}>
      <h1>Phonebook</h1>
      {data && <Form contacts={data} />}

      <div className={style.containerContacts}>
        <h2>Contacts:</h2>
        <Filter />
        {isFetching && (
          <Loading type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {data && <ContactList />}
      </div>
    </section>
  );
}
