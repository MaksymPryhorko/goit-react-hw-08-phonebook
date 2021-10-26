import ContactListItem from "Phonebook/ContactListItem";
import { getVisibleContacts, getFilter } from "redux/contacts-selectors";
import { useFetchContactsQuery } from "redux/contacts-rtkq";
import { useSelector } from "react-redux";

export default function ContactList() {
  const { data: contacts } = useFetchContactsQuery("");
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul>
      {visibleContacts.length > 0 &&
        visibleContacts.map((contact) => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
}
