import RegisterStyles from "../../styles/Register.module.css"
import { useState } from "react";

const Login = () => {

    const [phoneValue, setPhoneValue] = useState("")

    return (
        <div>
            <h2 className={RegisterStyles.title}>Online Savdo</h2>
            <p className={RegisterStyles.desc}>Davom etish uchun tizimga kiring</p>
            <from method="POST">
                <div>
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
            </from>
        </div>
    );
}
 
export default Login;