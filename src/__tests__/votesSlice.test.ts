import votesReducer, { sendVote, VotesState } from '../redux/slices/votesSlice'

describe('votes reducer', ()=>{
    const initialState: VotesState = { 
        votes: [],
        status: 'loading',
        error: null,
    };

    it('should return the initial state', () => {
    expect(votesReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('sould handle sendVote', () =>{
        const vote = {image_id: 'a', value: 1};
        const action = {type: sendVote.fulfilled.type, payload: vote}
        const newState = votesReducer(initialState, action);
        expect(newState.votes).toContainEqual(vote);
    })
})