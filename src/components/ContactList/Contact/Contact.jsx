import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../../redux/contactsSlice';

import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const clickHandler = event => {
    dispatch(deleteContact(event.currentTarget.id));
  };

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        id={id}
        onClick={clickHandler}
        className={css.button}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { Contact };
