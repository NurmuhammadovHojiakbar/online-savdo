import RegisterStyles from "../../styles/Register.module.css"
import PhoneIcon from "../Icons/PhoneIcon"
import LockIcon from "../Icons/LockIcon"

const SignUp = () => {
    return (
        <div>
            <h2 className={RegisterStyles.title}>Online Savdo</h2>
            <p className={RegisterStyles.desc}>Ro'yxatdan o'tish</p>
            <from className={RegisterStyles["login-form"]} method="POST">
                <div>
                    <input 
                        type="text" 
                        name="fullname"
                        placeholder="Ism va Familiya"
                        required    
                    />
                </div> 
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
                    <select required>
                        <option value="" disabled>Viloyatni tanlang</option>
                        <option value="farg'ona">Farg'ona</option>
                        <option value="andijon">Andijon</option>
                        <option value="namangan">Namangan</option>
                        <option value="toshkent">Toshkent</option>
                        <option value="buxoro">Buxoro</option>
                        <option value="samarqand">Samarqand</option>
                        <option value="xorazm">Xorazm</option>
                        <option value="jizzax">Jizzax</option>
                        <option value="termiz">Termiz</option>
                    </select>
                </div> 
                <div>
                    <input 
                        type="text" 
                        name="manzil"
                        placeholder="Manzil"
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
                <button type="submit">Ro'yxatdan o'tish</button> 
            </from>
        </div>
    );
}
 
export default SignUp;