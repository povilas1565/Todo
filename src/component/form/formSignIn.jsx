import { useState } from "react"
const FormsSignIn = ({ title, trigerController }) => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    return (
        <>
            <div className="form-wrapper">
                <div className="form-text">
                    Добро пожаловать в список дел, войдите в аккаунт или создайте его
                </div>
                <div className="fom-controls">
                    <div className="input">
                        <input
                            type="email"
                            placeholder="Введите email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className="form-send">
                        <button className="form-button" onClick={() => trigerController(email, pass)}>
                            {title}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { FormsSignIn }