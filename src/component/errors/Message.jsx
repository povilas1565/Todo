import Alert from '@mui/material/Alert';
import './message.css'
const Messages = ({ error }) => {
    return (
        <>

            <Alert variant="filled" severity="error">
                {error}
            </Alert>
        </>
    )
}
export default Messages;