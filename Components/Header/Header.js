import SearchIcon from "../Icons/SearchIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import LogOutIcon from "../Icons/LogOutIcon";

const Header = () => {
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
                        <h2>Hojiakbar Nurmuhammadov</h2>
                        <p>+998 99 999-99-99</p>
                    </div>
                    <div  className={"site-layout__user-image"}>

                    </div>
                </div>
                <div className={"site-layout__header-icons"}>
                    <NotificationIcon />
                    <LogOutIcon />
                </div>
            </div>
        </header>
    );
}
 
export default Header;