import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { addContact } from 'redux/operations';
import s from './ContactForm.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
