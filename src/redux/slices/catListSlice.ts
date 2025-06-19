import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/catApi";
import { Cat } from "types/commonTypes";

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
  const { data: breeds } = await api.get<Cat[]>('/breeds');

  const catsWithImages: Cat[] = [];

  for (const cat of breeds) {
    if (cat.reference_image_id) {
      try {
        const { data: imageData } = await api.get(`/images/${cat.reference_image_id}`);
        catsWithImages.push({ ...cat, image: { url: imageData.url } });
      } catch {
        catsWithImages.push({ ...cat, image: undefined });
      }
    } else {
      catsWithImages.push({ ...cat, image: undefined });
    }
  }

  return catsWithImages.filter((cat) => cat.image?.url);
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