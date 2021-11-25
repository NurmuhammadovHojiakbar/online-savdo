import Link from "next/link"
import MijozIcon from "../Icons/MijozIcon"
import MahsulotBolimIcon from "../Icons/MahsulotBolimIcon"
import MahsulotRoyxatIcon from "../Icons/MahsulotRoyxatIcon"
import BuyurtmaIcon from "../Icons/BuyurtmaIcon"
import XabarIcon from "../Icons/XabarIcon"

const Navbar = () => {

    const ClassChangeHandler =(e)=>{
        e.preventDefault();
        e.target.classList.add("site-layout__item-active")
    }

    return (
        <nav>
            <h1 className={"site-layout__title"}>Online Savdo</h1>
            <ul className={"site-layout__list"}>
                <li className={"site-layout__item"}>
                    <Link href="/mijoz">
                        <a className={`site-layout__link  site-layout__item-active`}>
                            <MijozIcon />
                            <span>Mijozlar</span>
                        </a>
                    </Link>
                </li>
                <li className={"site-layout__item"}>
                    <Link href="/mahsulot-bolim">
                        <a className={"site-layout__link"}>
                            <MahsulotBolimIcon />
                            <span>Mahsulot Bo'limi</span>
                        </a>
                    </Link>
                </li>
                <li className={"site-layout__item"}>
                    <Link href="/mahsulot-royxat">
                        <a className={"site-layout__link"}>
                            <MahsulotRoyxatIcon />
                            <span>Mahsulot ro'yxati</span>
                        </a>
                    </Link>
                </li>
                <li className={"site-layout__item"}>
                    <Link href="/buyurtma">
                        <a className={"site-layout__link"}>
                            <BuyurtmaIcon />
                            <span>Buyurtmalar</span>
                        </a>
                    </Link>
                </li>
                <li className={"site-layout__item"}>
                    <Link href="/xabarnoma">
                        <a className={"site-layout__link"}>
                            <XabarIcon />
                            <span>SMS xabarnoma</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;