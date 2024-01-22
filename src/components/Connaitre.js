import "../styles/Connaitre.css";
import { useEffect, useRef } from "react";

function Connaitre() {
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
        document.addEventListener("scrollButtonClickConnaitre", handleScrollButtonClick);

        // Nettoyez l'écouteur d'événement lors du démontage du composant
        return () => {
            document.removeEventListener("scrollButtonClickConnaitre", handleScrollButtonClick);
        };
    }, []);
    const experiences = ["2023 Apprenante ADA TECH SCHOOL, Nantes", "2022 Assistante d'agence, Société ALTEREA, Nantes", "2018 Assistante de Production, Société GECOP, St Herblain", "2018 Assistante administrative et accueil, Sidan, Nantes"];

    const competences = ["Anglais niveau C1", "Allemand niveau A2", "Travail en équipe, écoute, patience", "HTML", "CSS", "Javascript", "Python", "Java"];

    const loisirs = ["La lecture", "Les voyages", "La pâtisserie", "Les jeux-vidéos"];

    return (
        <div ref={targetElementRef} className="all">
            <h3>Me connaître</h3>
            <div className="connaitre">
                <div id="exp" className="encadre">
                    <p id="logo-exp"></p>
                    <h5>Expériences professionnelles</h5>
                    <ul>
                        {experiences.map((experience) => (
                            <li key={experience}>{experience}</li>
                        ))}
                    </ul>
                </div>
                <div id="comp" className="encadre">
                    <h5>Mes compétences</h5>
                    <ul>
                        {competences.map((competence) => (
                            <li key={competence}>{competence}</li>
                        ))}
                    </ul>
                </div>
                <div id="loisirs" className="encadre">
                    <h5>Mes centres d'intérets</h5>
                    <ul>
                        {loisirs.map((loisir) => (
                            <li key={loisir}>{loisir}</li>
                        ))}
                        <li id="logo-loisirs"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Connaitre;
