import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getFilter, getContacts } from '../../redux/selectors';
import { Contact } from './Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts) {
      }

      setMounted(true);
    }
  }, [contacts, mounted]);

  const formContactList = filter => {
    const newContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContactList;
  };

  return (
    <ul>
      {formContactList(filter).map(elem => (
        <li key={elem.id} className={css.element}>
          <Contact name={elem.name} number={elem.number} id={elem.id} />
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
