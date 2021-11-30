import { useRef } from "react"
import { useRouter } from "next/router"
import RegisterStyles from "../../styles/Register.module.css"
import PhoneIcon from "../Icons/PhoneIcon"
import LockIcon from "../Icons/LockIcon"
import { useUserContext } from "../../Contexts/UserContext"

const SignUp = () => {

    const {setCurrentUser,fetched,setFetched} = useUserContext()
    const router = useRouter()
    const nameRef = useRef()
    const phoneNumberRef = useRef()
    const regionRef = useRef()
    const addressRef = useRef()
    const passwordRef = useRef()

    const signupHandler = (e)=>{
        e.preventDefault();
        const newData = {
            name: nameRef.current.value,
            phoneNumber: `+998${phoneNumberRef.current.value}`,
            region: regionRef.current.value,
            address: addressRef.current.value,
            parol: passwordRef.current.value
        }
        
        fetch('https://online-savdo.vercel.app//api/users', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({newData}),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
        })
        setCurrentUser(newData)
        window.localStorage.setItem("user", JSON.stringify(newData))

        nameRef.current.value=""
        phoneNumberRef.current.value=""
        addressRef.current.value=""
        passwordRef.current.value = ""

        setFetched(!fetched)
        router.push("/mijoz")
    }

    return (
        <div>
            <h2 className={RegisterStyles.title}>Online Savdo</h2>
            <p className={RegisterStyles.desc}>Ro'yxatdan o'tish</p>
            <form 
                className={RegisterStyles["login-form"]} 
                method="POST"
                onSubmit={signupHandler}    
            >
                <div>
                    <input 
                        type="text" 
                        name="fullname"
                        placeholder="Ism va Familiya"
                        required  
                        ref={nameRef}  
                    />
                </div> 
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
                        ref={phoneNumberRef}  
                    />
                </div> 
                <div>
                    <select required ref={regionRef}>
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
                        ref={addressRef}    
                    />
                </div> 
                <div>
                <LockIcon />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        required
                        ref={passwordRef}
                    />
                </div>
                <button type="submit">Ro'yxatdan o'tish</button> 
            </form>
        </div>
    );
}
 
export default SignUp;