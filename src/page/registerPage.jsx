import { Link } from 'react-router-dom';
import { SignUp } from '../component/form/SignUp';
const RegisterPage = () => {
    return (
        <div className="forms">
            <SignUp />
            <div className="form-footer">
                <Link to="/login">Есть учетная запись? Войдите?</Link>
            </div>
        </div>
    )
}
export { RegisterPage }