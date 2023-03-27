import './notification.css';
import { useState } from "react";
import { useSelector } from "react-redux"
import { Notification } from './notification.jsx';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Notify = ({ message }) => {
    const [open, setOpen] = useState(false)
    const notification = useSelector(state => state.notification.notification);
    const hide = () => {
        setOpen(true);
    }
    return (
        <>
            <button onClick={hide}>
                <NotificationsIcon />
            </button>
            {open && (
                <div className="Notification">
                    <div className="notification_wrap">
                        {notification.length && (
                            <div className="notify-heading">
                                Уведомлений всего: <span>{notification.length}</span>
                            </div>
                        )}
                        {!notification.length ?
                            <div className="not-notify">
                                <p>
                                    Как поступят новые обновлениям мы вас предупредим!
                                </p>
                            </div>
                            :
                            <>
                                <ul className='notify-list'>
                                    {notification.map((notify, index) => (
                                        <Notification
                                            key={index}
                                            notify={notify}
                                        />
                                    ))}
                                </ul>
                            </>
                        }
                    </div>
                </div>
            )}
        </>
    )
}
export { Notify }