import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    avatar: null,
    url: null,
    progress: null,
};
const settingReducer = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setPhoto(state, action) {
            state.avatar = action.payload.avatar;
        },
        setUrl(state, action) {
            state.url = action.payload.url;
        },
        setProgress(state, action) {
            state.progress = action.payload;
        },
    },
});
export const { setPhoto, removeSetting, setUrl, setProgress } = settingReducer.actions;
export default settingReducer.reducer;