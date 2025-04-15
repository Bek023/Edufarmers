import style from './style/Summary.module.css';

export default function Summary({ title}) {
    return (
        <>
            <details className={style.block}>
                <summary>{title}</summary>
                <p>Understanding the Mood of your Colour Palette</p>
                <p>How to Combine Colours to Create Colour Palettes</p>
                <p>Tools for Designing with Colour</p>
                <p>Tools for Designing with Colour Resources</p>
                <p>Further Reading on Designing with Colout</p>
            </details>
        </>
    )
}