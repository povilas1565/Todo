import { useState } from "react"
import Messages from '../errors/Message';
import { useDispatch } from "react-redux"
import { db } from "../../fierbase/config";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { FormsSignUp } from "../form/formSignUp";
import { setUser } from "../../store/reducer/userReducer";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const SignUp = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [message, setMessage] = useState()
    const auth = getAuth();
    const handleRegister = async (name, email, password) => {
        if (!name && !email && !password) {
            setMessage('Введите данные')
            return;
        };
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                })
                await setDoc(doc(db, "users", user.uid), {
                    // userinfo: {
                    //     email: user.email,
                    //     id: user.uid,
                    //     pass: password,
                    //     displayName: name,
                    //     avatar: null,
                    // },
                    email: user.email,
                    id: user.uid,
                    pass: password,
                    displayName: name,
                    avatar: null,
                });
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    username: user.displayName,
                }));
                history('/')
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <>
            {message && (
                <div className="message-wrap">
                    <Messages
                        error={message}
                    />
                </div>
            )}
            <FormsSignUp
                title="Зарегестрироваться"
                trigerController={handleRegister}
            />
        </>
    )
}
export { SignUp }