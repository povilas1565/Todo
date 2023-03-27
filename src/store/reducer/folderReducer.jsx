import { db } from "../../fierbase/config";
import { createSlice } from '@reduxjs/toolkit';
import { doc, deleteDoc } from "firebase/firestore";
const initialState = {
  folder: [],
};
const folderReducer = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolder(state, action) {
      state.folder = action.payload;
    },
    deleteFolder(state, action) {
      if (window.confirm(`Вы действительно хотите удалить список?`)) {
        deleteDoc(doc(db, 'folder', action.payload));
      }
    },
  },
});
export const { setFolder, deleteFolder } = folderReducer.actions;
export default folderReducer.reducer;