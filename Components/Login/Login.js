import RegisterStyles from "../../styles/Register.module.css"
import { useState } from "react";
import PhoneIcon from "../Icons/PhoneIcon"
import LockIcon from "../Icons/LockIcon"

const Login = () => {

    const [phoneValue, setPhoneValue] = useState("")

    return (
        <div>
            <h2 className={RegisterStyles.title}>Online Savdo</h2>
            <p className={RegisterStyles.desc}>Davom etish uchun tizimga kiring</p>
            <form className={RegisterStyles["login-form"]} method="POST">
                <div>
                    <PhoneIcon />
                    <small>+998 </small>
                    <input 
                        type='tel' 
                        name="phone-number" 
                        placeholder="(--) --- -- --"
                        pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        maxLength="9" 
                        required    
                    />
                </div>
                <div>
                    <LockIcon />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        required
                    />
                </div>
                <button type="submit">Kirish</button>
            </form>
        </div>
    );
}
 
export default Login;