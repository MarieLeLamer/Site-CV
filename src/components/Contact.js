import "../styles/Contact.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleUpdate = (key, value) => {
        setValue((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const onClear = () => {
        setValue({
            name: "",
            email: "",
            message: "",
        });
    };

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
        document.addEventListener("scrollButtonClickContact", handleScrollButtonClick);

        // Nettoyez l'écouteur d'événement lors du démontage du composant
        return () => {
            document.removeEventListener("scrollButtonClickContact", handleScrollButtonClick);
        };
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_08b9mvi", "template_i4qssdq", form.current, "VBu0dvMlYKV8nps24").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    function sendForm(e) {
        sendEmail(e);
        onClear(e);
    }

    return (
        <div className="contacter" ref={targetElementRef}>
            <h3>Me contacter</h3>
            <p className="intro">Une question ? N'hésitez pas à remplir ce formulaire pour me joindre.</p>
            <div className="form">
                <form ref={form} onSubmit={sendForm}>
                    <div className="name center">
                        <label>Nom</label>
                        <input type="text" name="name" placeholder="Nom et prénom" required value={value.name} onInput={(e) => handleUpdate(e.target.name, e.target.value)} />
                    </div>
                    <div className="mail center">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Adresse mail" required value={value.email} onInput={(e) => handleUpdate(e.target.name, e.target.value)} />
                    </div>
                    <div className="message center">
                        <label>Message</label>
                        <textarea name="message" placeholder="Votre message" required value={value.message} onInput={(e) => handleUpdate(e.target.name, e.target.value)} />
                    </div>
                    <button type="submit" className="envoyer">Envoyer</button>
                </form>
            </div>
            <div className="remerciements">
                <p>Merci d'être passé par ici !</p>
            </div>
        </div>
    );
}

export default Contact;
