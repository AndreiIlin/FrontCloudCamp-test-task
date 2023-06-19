import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ModalsInitialState {
  isOpened: boolean;
  type: string;
}

const modalsInitialState: ModalsInitialState = {
  isOpened: false,
  type: '',
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: modalsInitialState,
  reducers: {
    setModal: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
  },
});

export const { actions: modalsActions, reducer: modalsReducer } = modalsSlice;
