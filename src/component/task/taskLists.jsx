import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import TaskItem from '../tasklistitem/taskListItem';
const Tasklists = () => {
    const tasks = useSelector(state => state.tasks.tasks);
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
                        completed={task.completed}
                    />
                ))}
            </ul>
        </>
    )
}
export { Tasklists }