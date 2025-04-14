import Learning from '../components/Continue_Learning';
import Popular_Course from '../components/Popular_Course';
import ProgressCalendar from '../components/Progress_Calendar';
import Title_block from '../components/Title_block';
import style from './style/Home.module.css';

export default function Home({ }) {
    return (
        <>
            <div className={style.block}>
                <Title_block />
                <div className={style.Learning_Block}>
                    <Learning />
                    <ProgressCalendar />
                </div>
                <Popular_Course i={3} />
            </div>
        </>
    )
}