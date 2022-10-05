import { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 32,
        color: '#010101',
        // height: 'auto',
        minHeight: 'calc(100vh - 10px)',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Contacts</h1>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ContactForm />
        {error && <h2>Error...</h2>}
        {isLoading && <Loader />}
        {contacts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Filter name="filter" />
            <ContactList />
          </div>
        ) : (
          <h2>You have not added contacts yet.</h2>
        )}
      </div>
    </div>
  );
}
