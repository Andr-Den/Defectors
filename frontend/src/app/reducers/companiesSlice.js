import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const initialState = {
  companiesList: [],
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

export const getCompany = createAsyncThunk(
  'companies/getCompany',
  async (data) => {
    const response = await api.getCompany(data);
    return response.data;
  },
);

export const searchName = createAsyncThunk(
  'companies/searchName', 
  async (data) => {
    const response = await api.searchName(data);
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

export const editCompany = createAsyncThunk(
  'companies/updateCompany',
  async (data) => {
    const response = await api.updateCompany(data);
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
          state.companiesList = action.payload;
        });
        builder
        .addCase(getCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          state.company = action.payload;
        });
        builder
        .addCase(searchName.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(searchName.fulfilled, (state, action) => {
          state.status = 'idle';
          state.companiesList = action.payload;
        });
        builder
        .addCase(addCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(addCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          state.companiesList.push(action.payload)
        });
        builder
        .addCase(editCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(editCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          state.company = action.payload;
        });
        builder
        .addCase(deleteCompany.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deleteCompany.fulfilled, (state, action) => {
          state.status = 'idle';
          action.payload = state.company._id;
          state.companiesList = state.companiesList.filter((item) => item._id !== action.payload);
        });
    },
});

export const allCompanies = (state) => state.companies.companiesList;
export const oneCompany = (state) => state.companies.company;

export default companiesSlice.reducer;
