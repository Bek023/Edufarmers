
import { FaEnvira} from "react-icons/fa";
import H_profile from './H_profile';
import style from './style/Header.module.css';
import Menu from "./DropDown_Menu";
import Favorites from "./Favoriets";
import Notification from "./Notification";
export default function Header({ }) {
    return (
        <header>
            <div className={style.container}>
                <div className={style.logo}>
                    <FaEnvira />
                    <span>Edufarmers</span>
                </div>
                <div className={style.icons}>
                   <Favorites/>
                    <Notification/>
                    <H_profile/>
                    {/* <Menu/> */}
                </div>
            </div>
        </header>
    )
}