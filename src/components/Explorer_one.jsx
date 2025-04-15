import { useParams } from "react-router-dom";
import data from "../store/course_data";
import style from "./style/one_course.module.css";
import Summary from "./sumary";
export default function Explorer_one({ }) {
    const { id } = useParams();
    const obj = data[id];
    return (
        <>
            <section className={style.main_block}>
                <div className={style.first_block}>
                    <img src={obj.Image} />
                    <h2>{obj.title}</h2>
                    <span>🌟{obj.review}  (687 Reviews)</span>
                    <p>Created by <span>{obj.teacher}</span></p>
                </div>
                <div className={style.second_block}>
                    <h2>What you'll learn</h2>
                    <div className={style.text_block}>
                        <div>
                            <p>Create mobile app designs from scratch</p>
                            <p>Understand the differences between <br />designing for iOS and Android</p>
                            <p>Create wireframe designs for e-Commerce Project</p>
                        </div>
                        <div>
                            <p>Create mockups using Figma</p>
                            <p>Start a new career as a UI/UX designer</p>
                        </div>
                    </div>
                    <h3>Requirement</h3>
                    <div className={style.text_block2}>
                        <p>No pre-knowledge required - we'll teach you everything you need to know</p>
                        <p>A PC or Mac is required</p>
                        <p>No software is required in advance of the course (all software used in the course is free or has a demo version)</p>
                    </div>
                    <h4>Description</h4>
                    <div className={style.text_block3}>
                        <p>This Course is great for people with absolutely no design experience or experienced designers who want to get up to speed quickly with mobile app design. We'll introduce you to the art of making beautiful apps. We'll explore key UI and UX concepts that are essential to building good looking and easy to use apps that are loved by users.
                            <br />
                            <br />
                            The course has a practical component that takes you step-by-step through the workflow of a professional app designer. From user flow diagrams to wireframing to mockups and prototypes.
                            <br />
                            <br />
                            Students completing the course will have the knowledge to create beautiful and lovable apps that leave people with a smile on their face.
                        </p>
                    </div>
                </div>
                <div className={style.third_block}>

                    <h2>Content Course</h2>
                    <div className={style.text_block4}>
                        <Summary title='Introduction' />
                        <Summary title="Color Theory" />
                        <Summary title="Typography" />
                        <Summary title="UI Design for Mobile Apps" />
                        <Summary title="Putting all Together : A step by step guide to E-Commerce Mobile Apps" />
                        <Summary title="Resources" />
                        <Summary title="Designing for iOS and Android" />
                    </div>
                </div>
            </section>
        </>
    )
}