import 'dayjs/locale/ru';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { db } from '../fierbase/config';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import { useAuth } from '../store/hooks/setting';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Messages from '../component/errors/Message';
import FormControl from '@mui/material/FormControl';
import { collection, addDoc } from "firebase/firestore";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PageNavigate } from '../component/navigate/pageNavigate';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const AddTasks = () => {
    const history = useNavigate();
    const currentUser = useAuth();
    const [message, setMessage] = useState('')
    const [locale, setLocale] = useState('ru');
    const [taskName, setTaskName] = useState('');
    const [folderName, setFolderName] = useState('');
    const [description, setDescription] = useState('');
    const [datePickerValue, setDatePickerValue] = useState(dayjs(new Date),);
    const folder = useSelector(state => state.folder.folder);
    const addTask = async () => {
        if (!taskName) {
            setMessage('Введите данные корректно')
            return;
        }
        await addDoc(collection(db, "tasks"), {
            userID: currentUser.uid,
            description: description,
            foldername: folderName,
            listId: folderName,
            takname: taskName,
            completed: false,
            date: datePickerValue.$d.getTime(),
        });
        setTaskName('')
        setMessage(null)
        history('/alltasks')
    }
    return (
        <>
            <div className="message-wrap message-task__control message-tasks">
                {message && (
                    <Messages
                        error={message}
                    />
                )}
            </div>
            <div className="container">
                <PageNavigate
                    pagetitle='Добавить задачу'
                />
                <div className="task-form task-page__form">
                    <div className="task-form__wrapper">
                        <div className="task-input">
                            <span className="form-group__text">Название задачи</span>
                            <input
                                value={taskName}
                                type="text"
                                placeholder="Начните вводить...."
                                onChange={e => setTaskName(e.target.value)}
                            />
                        </div>
                        <div className="task-input">
                            <span className="form-group__text">Описание задачи</span>
                            <textarea
                                value={description}
                                type="text"
                                placeholder='Введите описание задачи.....'
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="task-date">
                            <span className="form-group__text">Дата</span>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                                <div className="date-control">
                                    <Stack spacing={3}>
                                        <DatePicker
                                            value={datePickerValue}
                                            onChange={(newValue) => setDatePickerValue(newValue)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </div>
                            </LocalizationProvider>
                        </div>
                        <div className="task-input">
                            <span className="form-group__text">Название папки</span>
                            <FormControl sx={{ m: 0 }}>
                                <InputLabel htmlFor="grouped-select">Папки</InputLabel>
                                <Select defaultValue="" id="grouped-select" label="Grouping"
                                    onChange={e => setFolderName(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>Выберите папку</em>
                                    </MenuItem>
                                    {folder.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            value={item.foldername}
                                        >
                                            {item.foldername}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <button onClick={addTask} className="form-button">
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { AddTasks }