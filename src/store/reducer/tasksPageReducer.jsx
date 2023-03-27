import { db } from "../../fierbase/config";
import { createSlice } from '@reduxjs/toolkit';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
const initialState = {
    page: [],
};
const taskPageReducer = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setTasksPage(state, action) {
            state.page = action.payload;
        },
        deleteTaskPage(action) {
            deleteDoc(doc(db, 'tasks', action.payload));
        },
        toggleComplete(action) {
            updateDoc(doc(db, 'tasks', action.payload), {
                completed: !action.payload.completed,
            });
        }
    },
});
export const { setTasksPage } = taskPageReducer.actions;
export default taskPageReducer.reducer;