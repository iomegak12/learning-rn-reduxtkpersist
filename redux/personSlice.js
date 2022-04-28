import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: 'person',
    initialState: {
        value: ''
    },
    reducers: {
        rename: (state, action) => {
            state.value = action.payload ? action.payload : "";
        }
    }
});

export const { rename } = personSlice.actions;
export default personSlice.reducer;