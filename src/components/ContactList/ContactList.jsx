import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectFilter,
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Contact } from './Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formContactList = filter => {
    const newContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContactList;
  };

  return (
    <ul>
      {isLoading && <p>Request in progress...</p>}
      {error && <p>Warning! {error}</p>}
      {formContactList(filter).map(elem => (
        <li key={elem.id} className={css.element}>
          <Contact name={elem.name} phone={elem.phone} id={elem.id} />
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
