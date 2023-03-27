import { db } from '../fierbase/config';
import { useState, useEffect } from 'react';
import { useAuth } from '../store/hooks/setting';
import { useNavigate } from "react-router-dom";
import { PageNavigate } from '../component/navigate/pageNavigate';
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import Messages from '../component/errors/Message';
import Badge from '../component/bage/Badge';
const AddFolder = () => {
    const history = useNavigate();
    const currentUser = useAuth();
    const [value, setValue] = useState('');
    const [select, selectColor] = useState();
    const [message, setMessage] = useState('')
    const [colorsItems, setColors] = useState([]);
    const addList = async () => {
        if (!value && !select) {
            setMessage('Введите название списка')
            return;
        }
        await addDoc(collection(db, "folder"), {
            foldername: value,
            colorId: select,
            userID: currentUser.uid,
            id: value,
        });
        setValue('')
        setMessage(null)
        history('/category')
    }
    useEffect(() => {
        const colorReference = collection(db, "colors");
        const querys = query(colorReference);
        onSnapshot(querys, (data) => {
            const colorsItems = data.docs.map((doc) => ({
                ...doc.data(),
            }));
            setColors(colorsItems)
        })
    }, [])
    return (
        <>
            <div className="message-wrap message-task__control">
                {message && (
                    <Messages
                        error={message}
                    />
                )}
            </div>
            <div className="container">
                <PageNavigate
                    pagetitle="Добавить список"
                />
                <div className="task-form">
                    <div className="task-form__wrapper">
                        <div className="task-input">
                            <span className="form-group__text">Название списка</span>
                            <input
                                value={value}
                                type="text"
                                placeholder="Начните вводить...."
                                onChange={e => setValue(e.target.value)}
                            />
                        </div>
                        <div className="task-color">
                            <span className="form-group__text">Цвет</span>
                            <div className="task-color__items">
                                {colorsItems.map(color => (
                                    <Badge
                                        onClick={() => selectColor(color.hex)}
                                        key={color.id}
                                        hex={color.hex}
                                        className={select === color.hex && 'active'}
                                    />
                                ))}
                            </div>
                        </div>
                        <button onClick={addList} className="form-button">
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { AddFolder }