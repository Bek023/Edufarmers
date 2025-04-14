import { useParams } from "react-router-dom";
import data from "../store/course_data";
import style from "./style/one_course.module.css";
export default function Explorer_one({ }) {
    const { id } = useParams();
    const obj = data[id];
    return (
        <>
            <section>
                <div className={style.main_block}>
                    <div className={style.first_block}>
                        <img src={obj.Image} />
                        <h2>{obj.title}</h2>
                        <span>🌟{obj.review}  (687 Reviews)</span>
                        <p>Created by <span>{obj.teacher}</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}