import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { Notify } from '../notification/notify';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const PageNavigate = ({ pagetitle }) => {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    const notification = useSelector(state => state.notification.notification);
    return (
        <>
            <div className="navigate">
                <button className='go-back' onClick={back}>
                    <ArrowBackIosIcon />
                </button>
                <div className="pgae-name">
                    {pagetitle}
                </div>
                <>
                    <div className="notification-">
                        {notification.length && (
                            <span className='circle'></span>
                        )}
                        <Notify />
                    </div>
                </>
            </div>
        </>
    )
}
export { PageNavigate }