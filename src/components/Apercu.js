import "../styles/Apercu.css"

function Apercu({divClassName, hRef, imgSrc, imgAlt, pClassname, pDescription}) {
    return (
        <div className={divClassName}>
            <a href={hRef}>
                <img src={imgSrc} alt={imgAlt} />
                <p className={pClassname}>{pDescription}</p>
            </a>
        </div>
    );
}
export default Apercu;
