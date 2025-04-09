import data from '../store/profile_data';
import style from './style/H_profile.module.css';
export default function H_profile({ }) {
    return (
        <div className={style.profile}>
            <img src={data[0].image} />
            <div className={style.text}>
                <p className={style.name}>{data[0].name}</p>
                <p className={style.email}>{data[0].email}</p>
            </div>
        </div>
    )
}