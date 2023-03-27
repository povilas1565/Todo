import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    username: null,
    email: null,
    token: null,
    id: null,
    avatar: null,
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.avatar = action.payload.avatar;
        },
        removeUser(state) {
            state.username = null;
            state.user = null;
            state.email = null;
            state.token = null;
            state.id = null;
            state.avatar = null;
        },
    },
});
export const { setUser, removeUser } = userReducer.actions;
export default userReducer.reducer;