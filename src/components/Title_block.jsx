import style from './style/Title_block.module.css';

export default function Title_block({ }) {
    return (
        <>
            <main>
                <section className={style.kantenir}>
                    <h2 className={style.title}>Bringing growth to Agriculture.</h2>
                    <p className={style.text}>“Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth,<br />
                        good morals, and happiness.” – Thomas Jefferson.</p>
                    <button className={style.btn}>Explore Now</button>
                </section>
            </main>
        </>
    )
}