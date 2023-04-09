import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://643078c8b289b1dec4c8e389.mockapi.io/contacts';

// const fetchContactsjjjjjj = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   console.log(response);
//   console.log(response.data);
//   return response.data;
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone}, thunkAPI) => {
    try {
      const id = nanoid();
      // console.log(name);
      // console.log(phone);
      // console.log(id);
      const response = await axios.post('/contacts', { name, phone, id });
      // console.log(response);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      // console.log(response);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// https://643078c8b289b1dec4c8e389.mockapi.io/contacts/:endpoint
