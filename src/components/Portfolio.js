import { useEffect, useRef } from "react";
import "../styles/Portfolio.css";
import lyricsfinderImage from "../assets/lyricsfinder.png";
import comingsoon from "../assets/comingsoon.jpg";

function Portfolio() {
    const targetElementRef = useRef(null);

    useEffect(() => {
        // Écoutez l'événement personnalisé et effectuez le défilement
        const handleScrollButtonClick = () => {
            if (targetElementRef.current) {
                targetElementRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };

        // Ajoutez l'écouteur d'événement
        document.addEventListener("scrollButtonClickPortfolio", handleScrollButtonClick);

        // Nettoyez l'écouteur d'événement lors du démontage du composant
        return () => {
            document.removeEventListener("scrollButtonClickPortfolio", handleScrollButtonClick);
        };
    }, []);

    return (
        <div ref={targetElementRef} className="portfolio">
            <div className="scrollcontainerup">
                <div className="scrollingtextup">
                    <p>PORTFOLIO</p>
                    <p>PORTFOLIO</p>
                    <p>PORTFOLIO</p>
                </div>
            </div>
            <div className="website">
                <div className="lyricsfinder">
                    <a href="https://marielelamer.github.io/Lyrics-Finder/">
                        <img src={lyricsfinderImage} alt="Page d'accueil de Lyrics Finder" />
                        <p className="description">Lyrics Finder : projet Dataviz API</p>
                    </a>
                </div>

                <div className="incoming">
                    <a href="#">
                        <img src={comingsoon} alt="A venir" />
                        <p className="description">A venir</p>
                    </a>
                </div>
                <div className="incoming">
                    <a href="#">
                        <img src={comingsoon} alt="A venir" />
                        <p className="description">A venir</p>
                    </a>
                </div>
                <div className="incoming">
                    <a href="#">
                        <img src={comingsoon} alt="A venir" />
                        <p className="description">A venir</p>
                    </a>
                </div>
            </div>
            <div className="scrollcontainerdown">
                <div className="scrollingtextdown">
                    <p>PORTFOLIO</p>
                    <p>PORTFOLIO</p>
                    <p>PORTFOLIO</p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
