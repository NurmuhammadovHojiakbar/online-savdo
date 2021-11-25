import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"

const Layout = ({children}) => {
    return (
        <div className={"site-layout"}>
            <Navbar />
            <div className={"site-layout__container"}>
                <Header />
                { children }
            </div>
        </div>
    );
}
 
export default Layout;