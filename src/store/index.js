import userReducer from './reducer/userReducer';
import folderReduser from './reducer/folderReducer';
import tasksReducer from './reducer/tasksReducer';
import taskPageReducer from './reducer/tasksPageReducer';
import notificationReducer from './reducer/notificationReducer';
import settingReducer from './reducer/settingReducer';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        user: userReducer,
        setting: settingReducer,
        tasks: tasksReducer,
        page: taskPageReducer,
        folder: folderReduser,
        notification: notificationReducer,
    },
});
