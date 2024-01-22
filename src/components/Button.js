import "../styles/Button.css";

function Button({ txt, onclick }) {
    return <button onClick={onclick} className="btn" > {txt}</button>;
}

export default Button;
