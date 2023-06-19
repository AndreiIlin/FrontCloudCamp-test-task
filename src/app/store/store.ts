import { configureStore } from '@reduxjs/toolkit';

import { formReducer, modalsReducer } from 'app/store/slices';

export const store = configureStore({
  reducer: {
    form: formReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
