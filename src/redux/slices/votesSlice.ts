import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "api/catApi";

interface Vote {
    image_id: string;
    value: number; //1 for like
}

export interface VotesState { 
    votes: Vote[];
    status: 'idle' | 'loading' | 'succeded' | 'failed';
    error: string | null;
}

const initialState: VotesState = {
    votes: [],
    status: 'idle',
    error: null,
};

export const sendVote = createAsyncThunk(
    'votes/sendVote',
    async(vote: Vote) => {
        await api.post('/votes', vote);
        return vote;
    }
);

const votesSlice = createSlice({
    name: 'votes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendVote.pending, (state) =>{
                state.status = 'loading';
            })
            .addCase(sendVote.fulfilled, (state, action: PayloadAction<Vote>) =>{
                state.status = 'succeded';
                state.votes.push(action.payload);
            })
            .addCase(sendVote.rejected, (state, action) => {
                state.status = 'failed',
                state.error = action.error.message || 'Failed to send vote';
            });
    },
});

export default votesSlice.reducer;