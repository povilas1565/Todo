import { db } from "../../fierbase/config";
import { createSlice } from '@reduxjs/toolkit';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
const initialState = {
    tasks: [],
};
const tasksReducer = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action) {
            state.tasks = action.payload;
        },
        deleteTask(action) {
            deleteDoc(doc(db, 'tasks', action.payload));
        },
        toggleComplete(action) {
            updateDoc(doc(db, 'tasks', action.payload.task.id), {
                completed: !action.payload.task.completed,
            });
        }
    },
});
export const { setTasks, deleteTask, toggleComplete } = tasksReducer.actions;
export default tasksReducer.reducer;