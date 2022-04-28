import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        addStep: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, addStep } = counterSlice.actions;
export default counterSlice.reducer;
export const addThunk = (step = 1) => {
    return async dispatch => {
        setTimeout(() => {
            console.log("Async Add Invoked ...");

            dispatch(addStep(step));
        }, 2000);
    };
};