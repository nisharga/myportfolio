import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountState {
    count: number;
}

const initialState: CountState = {
    count: 0
};

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        }
    }
});

export const { setCount } = countSlice.actions;
export default countSlice.reducer;
