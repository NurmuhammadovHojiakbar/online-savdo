import { useEffect, useRef } from "react";
import router, { useRouter } from "next/router";
import { useUserContext } from "../../Contexts/UserContext";
import RegisterStyles from "../../styles/Register.module.css"
import PhoneIcon from "../Icons/PhoneIcon"
import LockIcon from "../Icons/LockIcon"

const Login = () => {

    const {usersList,currentUser,setCurrentUser,error,setError,} = useUserContext()
    const PhoneNumberRef = useRef()
    const PasswordRef = useRef()
    const router = useRouter()

    const loginHandler = (e)=>{
        e.preventDefault();
        const user = usersList.find(u=>{
            return u.phoneNumber === `+998${PhoneNumberRef.current.value}` && u.parol === PasswordRef.current.value
        })

        if(user){
            setCurrentUser(user)
            setError(false)
            window.localStorage.setItem("user", JSON.stringify(user))
            PhoneNumberRef.current.value =""
            PasswordRef.current.value =""
            router.push("/mijoz")
        }if(!user){
            setError(true)
        }
    }
    
    useEffect(()=>{
        if(currentUser){
            router.push("/mijoz")
        }
    },[currentUser])

    return (
        <div>
            <h2 className={RegisterStyles.title}>Online Savdo</h2>
            <p className={RegisterStyles.desc}>Davom etish uchun tizimga kiring</p>
            <form 
                className={RegisterStyles["login-form"]} 
                method="POST" 
                onSubmit={loginHandler}
            >
                <div>
                    <PhoneIcon />
                    <small>+998 </small>
                    <input 
                        type='tel' 
                        name="phone-number" 
                        placeholder="(--) --- -- --"
                        pattern="[0-9]{9}"
                        maxLength="9" 
                        required    
                        ref={PhoneNumberRef}
                    />
                </div>
                <div>
                    <LockIcon />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        required
                        ref={PasswordRef}
                        />
                </div>
                {error && <p>Xatolik aniqlandi, iltimos boshqa urinib ko'ring!</p>}
                <button type="submit">Kirish</button>
            </form>
        </div>
    );
}
 
export default Login;