import { configureStore, createSlice } from '@reduxjs/toolkit';


// A basic slice to use as a reducer

const dummySlice = createSlice({
    name: 'dummy',
    initialState: {},
    reducers: {},
});     

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;

export const store = configureStore({
    reducer: {
        dummy: dummySlice.reducer,
    }, // Just a dummy slice
});
