import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://643078c8b289b1dec4c8e389.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});







// https://643078c8b289b1dec4c8e389.mockapi.io/contacts/:endpoint