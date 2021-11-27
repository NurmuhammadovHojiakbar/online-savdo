import { useUserContext } from "../../Contexts/UserContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SearchIcon from "../Icons/SearchIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import LogOutIcon from "../Icons/LogOutIcon";

const Header = () => {

    const {currentUser, setCurrentUser} = useUserContext()
    const router = useRouter()

    const logOutHandler = ()=>{
        window.localStorage.removeItem("user")
        setCurrentUser(null)
    }
    
    useEffect(()=>{
        if(!currentUser){
            router.push("/")
        }
    },[currentUser])

    return (
        <header className={"site-layout__header"}>
            <form className={"site-layout__header-form"}>
                <div className={"site-layout__header-search"}>
                    <SearchIcon />
                    <input 
                        type="search"
                        name="item"
                        placeholder="Qidiruv"
                        required    
                    />
                </div>
            </form>
            <div className={"site-layout__user-container"}>
                <div className={"site-layout__user-info"}>
                    <div>
                        <h2>{currentUser?.name}</h2>
                        <p>{currentUser?.phoneNumber}</p>
                    </div>
                    <div  className={"site-layout__user-image"}>

                    </div>
                </div>
                <div className={"site-layout__header-icons"}>
                    <button><NotificationIcon /></button>
                    <button onClick={logOutHandler}><LogOutIcon /></button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;