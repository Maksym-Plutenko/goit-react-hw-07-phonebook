import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       const id = nanoid();

  //       return {
  //         payload: {
  //           name,
  //           number,
  //           id,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact: {
  //     reducer(state, action) {
  //       const contactId = action.payload.id;
  //       const newContacts = state.items.filter(cont => cont.id !== contactId);
  //       state.items = newContacts;
  //     },
  //     prepare(id) {
  //       return {
  //         payload: {
  //           id,
  //         },
  //       };
  //     },
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const newContacts = state.items.filter(contact => contact.id !== action.payload.id);
      state.items = newContacts;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const contactsReduser = contactsSlice.reducer;
// const { addContact, deleteContact } = contactsSlice.actions;

export { contactsReduser };
