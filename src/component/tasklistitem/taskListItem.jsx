import './task.css'
import { timer } from "../../utils";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react';
import { toggleComplete, deleteTask } from '../../store/reducer/tasksReducer';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const TaskItem = ({ id, task }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    const [isActual, setIsActual] = useState(true);
    const startTimer = useCallback(() => {
        if (timer(task?.date) && (pathname === '/' || pathname === '/alltasks')) {
            setTimeout(() => startTimer(), 10000);
        } else {
            setIsActual(false);
        }
    }, [pathname])
    useEffect(() => {
        startTimer()
    }, []);
    return (
        <>
            <li key={id} className={`page-task__item ${!isActual && 'expired'}`}>
                <div className="checkbox">
                    <input
                        onChange={() => dispatch(toggleComplete({ task }))}
                        checked={task.completed ? 'checked' : ''}
                        type="checkbox"
                        id={`${id}`}
                        disabled={!isActual}
                    />
                    <label htmlFor={`${id}`}>
                        <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                stroke="#000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </label>
                </div>
                <div className="task-name">
                    {task.takname}
                </div>
                <div className="task-folder__name">
                    {task.foldername}
                </div>
                <button className='deleted' onClick={() => dispatch(deleteTask(task.id))}>
                    <DeleteOutlineIcon />
                    Удалить
                </button>
            </li>
        </>
    )
}
export default TaskItem;
