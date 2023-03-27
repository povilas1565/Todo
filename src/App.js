import { useEffect } from "react";
import { db } from "./fierbase/config";
import { HomePage } from "./page/homePage";
import { useDispatch } from "react-redux"
import { LoginPage } from "./page/loginPage";
import { RegisterPage } from "./page/registerPage";
import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from "./page/profilePage";
import { AddFolder } from "./page/addFolderPage";
import { AddTasks } from "./page/addTaskPage";
import { TaskPage } from "./page/taskPage";
import { CalendarPage } from "./page/calendarPage";
import { AllTaskPage } from "./page/allTaskPage";
import { CategoryPage } from "./page/categoryPage";
import { setFolder } from "./store/reducer/folderReducer";
import { setNotification } from "./store/reducer/notificationReducer";
import { setTasks } from "./store/reducer/tasksReducer";
import { useAuth } from './store/hooks/setting';
import { onSnapshot, query, collection, where, doc } from "firebase/firestore";
function App() {
  const dispatch = useDispatch()
  const currentUser = useAuth();
  const taskRef = collection(db, "tasks");
  const folderRef = collection(db, "folder");
  const notificationDataReference = collection(db, "notification");
  useEffect(() => {
    if (currentUser) {
      const q = query(folderRef, where("userID", "==", currentUser.uid))
      const dataFolder = onSnapshot(q, (querySnapshot) => {
        let folderArr = [];
        querySnapshot.forEach((doc) => {
          folderArr.push({ ...doc.data(), id: doc.id })
        });
        dispatch(setFolder(folderArr))
      });
      return () => dataFolder();
    }
  }, [currentUser?.uid]);

  useEffect(() => {
    if (currentUser) {
      const qs = query(taskRef, where("userID", "==", currentUser.uid))
      const dataTasks = onSnapshot(qs, (querySnapshot) => {
        let taskArr = [];
        querySnapshot.forEach((doc) => {
          taskArr.push({ ...doc.data(), id: doc.id })
        });
        dispatch(setTasks(taskArr))
      });
      return () => dataTasks();
    }
  }, [currentUser?.uid]);

  useEffect(() => {
    const data = query(notificationDataReference)
    const dataNotify = onSnapshot(data, (querySnapshot) => {
      let notifyArray = [];
      querySnapshot.forEach((doc) => {
        notifyArray.push({ ...doc.data(), id: doc.id })
      });
      dispatch(setNotification(notifyArray))
    });
    return () => dataNotify();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="posts/:lists" element={<TaskPage />} />
        <Route path="/alltasks" element={<AllTaskPage />} />
        <Route path="/addfolder" element={<AddFolder />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/addtasks" element={<AddTasks />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </>
  );
}

export default App;
