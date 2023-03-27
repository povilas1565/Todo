import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    notification: [],
};
const notificationReducer = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notification = action.payload;
        },
    },
});
export const { setNotification } = notificationReducer.actions;
export default notificationReducer.reducer;