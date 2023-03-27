import { Login } from '../component/form/SignIn';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <div className="forms">
            <Login />
            <div className="form-footer">
                <Link to="/register">Нет учетной записи?</Link>
            </div>
        </div>
    )
}
export { LoginPage }