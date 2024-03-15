import { useEffect, useRef } from "react";
import "../styles/Portfolio.css";
import lyricsfinderImage from "../assets/lyricsfinder.png";
import comingsoon from "../assets/comingsoon.jpg";
import zinzinszestes from "../assets/leszinzinszestes.png"
import adopteunmeuble from "../assets/adopteunmeuble.png"
import Apercu from "./Apercu";


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
                <Apercu divClassName="lyricsfinder" hRef="https://marielelamer.github.io/Lyrics-Finder/" imgSrc={lyricsfinderImage} imgAlt="Page d'accueil de Lyrics Finder" pClassname="description" pDescription="Lyrics Finder : réalisation d'un site Web simple pour traiter des données et les afficher" />

                <Apercu divClassName="zinzinszestes" hRef="https://github.com/MarieLeLamer/projet-collectif-r-seau-social-php-les-zinzins-zestes" imgSrc={zinzinszestes} imgAlt="Aperçu d'une page des Zinzins Zestés" pClassname="description" pDescription="Les zinzins zestés : reprise d'une code base pour développer un réseau social" />

                <Apercu divClassName="adopteunmeuble" hRef="https://github.com/MarieLeLamer/adopte-un-meuble" imgSrc={adopteunmeuble} imgAlt="Aperçu d'une page de Adopte un meuble" pClassname="description" pDescription="Adopte un meuble : réalisation dans son entièreté d'une plateforme de vente de meuble" />

                <Apercu divClassName="incoming" hRef="#" imgSrc={comingsoon} imgAlt="A venir" pClassname="description" pDescription="A venir" />
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
