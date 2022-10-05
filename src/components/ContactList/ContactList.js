import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  return (
    <ul>
      {contacts
        .filter(contact => {
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </ul>
  );
}
