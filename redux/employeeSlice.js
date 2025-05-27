import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch data
export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async () => {
    const response = await axios.get('http://localhost:5000/api/employees'); // adjust URL
    return response.data;
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
