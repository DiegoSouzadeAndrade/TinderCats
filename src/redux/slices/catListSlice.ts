import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/catApi";

interface Cat {
    id: string;
    name: string;
    image?: {
        url: string;
    };
}

interface CatListState { 
    cats: Cat[];
    loading: boolean;
    error: string | null;
}

const initialState: CatListState = {
    cats: [],
    loading: false,
    error: null,
}

export const fetchCats = createAsyncThunk('catList/fetchCats', async () => {
    const response = await api.get('/breeds');
    return response.data;
});

const catListSlice = createSlice({
    name: 'catList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.loading = false;
                state.cats = action.payload;
            })
            .addCase(fetchCats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch cats';
            });
    },
});

export default catListSlice.reducer;