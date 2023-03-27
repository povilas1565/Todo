import './notification.css';
const Notification = ({ id, notify }) => {
    return (
        <>
            <li className='notice' key={id}>
                <span className='notify-title'>{notify.title}</span>
                <p className='notify-description'>{notify.description}</p>
            </li>
        </>
    )
}
export { Notification }