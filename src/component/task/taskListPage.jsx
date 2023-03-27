import {Link, useParams} from 'react-router-dom';
import { db } from "../../fierbase/config";
import { useSelector } from "react-redux"
import TaskItem from '../tasklistitem/taskListItem';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
const TaskListPage = () => {
    const { lists } = useParams();
    const tasks = useSelector(state => state.tasks.tasks?.filter(i => i.foldername === lists));
    const toggleComplete = async (page) => {
        await updateDoc(doc(db, 'tasks', page.id), {
            completed: !page.completed,
        });
    }
    const deleted = async (id) => {
        await deleteDoc(doc(db, "tasks", id))
    };
    
    return (
        <>
            {!tasks.length && (
                <div className="content-none">
                    <h2>Список задач пуст</h2>
                    <p>
                        <Link to="/addtasks">Добавьте свою первую задачу</Link>
                    </p>
                </div>
            )}
            <ul className="tasklists">
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        id={index}
                        toggleComplete={toggleComplete}
                        deleted={deleted}
                    />
                ))}
            </ul>
        </>
    )
}
export { TaskListPage }