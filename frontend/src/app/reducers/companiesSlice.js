import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const initialState = {
  companyList: [],
  company: {},
  status: '',
};

export const getCompanies = createAsyncThunk(
  'companies/getCompanies',
  async () => {
    const response = await api.getCompanies();
    return response.data;
  },
);

export const addCompany = createAsyncThunk(
  'companies/addCompany',
  async ({name, website, date}) => {
    const response = await api.addCompany(name, website, date);
    return response.data;
  },
);

export const deleteCompany = createAsyncThunk(
  'companies/deleteCompany',
  async (data) => {
    const response = await api.deleteCompany(data);
    return response.data;
  },
);

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(getCompanies.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCompanies.fulfilled, (state, action) => {
          state.status = 'idle';
          state.companyList = action.payload;
        });
        builder
        .addCase(addCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          state.company = action.payload;
        });
        builder
        .addCase(deleteCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deleteCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          state.company = action.payload;
        });
    },
});

export const allCompanies = (state) => state.companies.companyList;

export default companiesSlice.reducer;
