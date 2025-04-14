import style from "./style/Popular_Course.module.css";
import data from "../store/course_data";
import { Link,  } from "react-router-dom";

export default function Popular_Course({ i }) {
    return (
        <>
            <section className={style.block}>
                <h2>Popular Course</h2>
                <div className={style.grid_block}>
                    {data.slice(0, i).map((course, id) => (
                        <div key={id} className={style.Courses}>
                            <img src={course.Image} />
                            <h4>{course.title}</h4>
                            <p>{course.teacher}</p>
                            <span>🌟{course.review}</span>
                            <button><Link to={`/explore/${id}`}>Enroll Course</Link></button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}