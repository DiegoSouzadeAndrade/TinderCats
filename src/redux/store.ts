import { configureStore } from "@reduxjs/toolkit";
import catListReducer from './slices/catListSlice';
import votesReducer from './slices/votesSlice';

export const store = configureStore({
    reducer: {
        catList: catListReducer,
        votes: votesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

