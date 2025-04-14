import Progress_line from "./progress_line";
import data from "../store/course_data";
import style from "./style/Continue.module.css";

export default function Learning() {
    return (
        <>
            <section className={style.block}>
                <div className={style.title_block}>
                    <h2 className={style.title}>Continue Learning</h2>
                    <p>See All</p>
                </div>

                <div className={style.course_block}>
                    {data.slice(0, 2).map((course, i) => (
                        <div key={i} className={style.a_course}>
                            <img src={course.Image}  />
                            <div className={style.a_title}>
                                <div>
                                    <h3>{course.title}</h3>
                                    <p>{course.subTitle}</p>
                                </div>
                                <Progress_line percent={course.lessons} />
                            </div>
                            <button>Resume</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
