import { createSlice } from "@reduxjs/toolkit";

const ageSlice = createSlice({
    name: 'age',
    initialState: {
        value: '0'
    },
    reducers: {
        addStep: (state, action) => {
            state.value = parseInt(
                action.payload ? action.payload : 0).toString()
        }
    }
});

export const { addStep } = ageSlice.actions;
export default ageSlice.reducer;