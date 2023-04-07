import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        const id = nanoid();

        return {
          payload: {
            name,
            number,
            id,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const contactId = action.payload.id;
        const newContacts = state.items.filter(cont => cont.id !== contactId);
        state.items = newContacts;
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

const contactsReduser = contactsSlice.reducer;
const { addContact, deleteContact } = contactsSlice.actions;

export { contactsReduser, addContact, deleteContact };
