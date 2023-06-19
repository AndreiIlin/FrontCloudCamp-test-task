import { type AxiosResponse } from 'axios';

import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type RootState } from 'app/store';

import { api } from 'shared/api';

interface FormFields {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  sername: string;
  sex: 'man' | 'woman' | '';
  advantages: string[];
  radio: number | null;
  checkbox: number[];
  about: string;
}

interface FormInitialState {
  formFields: FormFields;
  step: number;
  sendStatus: 'idle' | 'success' | 'error' | 'loading';
}

const formInitialState: FormInitialState = {
  formFields: {
    phone: '',
    email: '',
    nickname: '',
    name: '',
    sername: '',
    sex: '',
    advantages: ['', ''],
    radio: null,
    checkbox: [],
    about: '',
  },
  step: 1,
  sendStatus: 'idle',
};

export const sendFormThunk = createAsyncThunk<
  AxiosResponse<{ status: string; message: string }>,
  void,
  {
    state: RootState;
  }
>('form/sendFrom', async (_, thunkAPI) => {
  const values = thunkAPI.getState().form.formFields;
  const response = await api.post<AxiosResponse<{ status: string; message: string }>>('', JSON.stringify(values));

  return response.data;
});

export const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setSendStatus: (state, action: PayloadAction<FormInitialState['sendStatus']>) => {
      state.sendStatus = action.payload;
    },
    setFormFields: (state, action: PayloadAction<Partial<FormFields>>) => {
      state.formFields = { ...state.formFields, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormThunk.pending, (state) => {
        state.sendStatus = 'loading';
      })
      .addCase(sendFormThunk.fulfilled, (state) => {
        state.sendStatus = 'success';
      })
      .addCase(sendFormThunk.rejected, (state) => {
        state.sendStatus = 'error';
      });
  },
});

export const { reducer: formReducer, actions: formActions } = formSlice;
