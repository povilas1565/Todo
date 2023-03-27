import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};
const timerReducer = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime(state, action) {
            state.days = action.payload.days;
            state.hours = action.payload.hours;
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
        },
    },
});
export const { setTime, ChangeTime } = timerReducer.actions;
export default timerReducer.reducer;