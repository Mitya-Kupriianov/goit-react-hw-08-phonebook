import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, delContact } from './operations';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-22' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [delContact.pending](state) {
      state.isLoading = true;
    },
    [delContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [delContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// reducers: {
//   delContact: (state, action) => {
//     state.items = state.items.filter(({ id }) => id !== action.payload);
//   },
//   addContact: (state, action) => {
//     state.items.push(action.payload);
//   },
// },
// });

// export const { fetchContacts, addContact, delContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
