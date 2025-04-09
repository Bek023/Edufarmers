
import { FaEnvira, FaHeart, FaBell } from "react-icons/fa";
import data from '../store/profile_data';
import style from './style/Header.module.css';
import Menu from "./DropDown_Menu";
export default function Header({ }) {
    return (
        <header>
            <div className={style.container}>
                <div className={style.logo}>
                    <FaEnvira />
                    <span>Edufarmers</span>
                </div>
                <div className={style.icons}>
                    <FaHeart className={style.fav}/>
                    <FaBell className={style.bell}/>
                    <div className={style.profile}>
                        <img src={data[0].image} />
                        <div className={style.text}>
                            <p className={style.name}>{data[0].name}</p>
                            <p className={style.email}>{data[0].email}</p>
                        </div>
                    </div>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}