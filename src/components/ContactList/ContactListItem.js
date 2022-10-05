import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';
import s from './ContactList.module.css';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      {name}:<br />
      {number}
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(delContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
