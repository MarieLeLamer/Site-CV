import Button from "./Button.js";
import "../styles/Main.css";

function Main() {
    return (
        <div className="main">
            <h1 className="h1">Marie LE LAMER</h1>
            <div>
                <Button
                    txt="Me connaître"
                    onclick={() => {
                        const event = new Event("scrollButtonClickConnaitre");
                        document.dispatchEvent(event);
                    }}
                />
                <Button
                    txt="Portfolio"
                    onclick={() => {
                        const event = new Event("scrollButtonClickPortfolio");
                        document.dispatchEvent(event);
                    }}
                />
                <Button txt="Contact" onclick={() => {
                        const event = new Event("scrollButtonClickContact");
                        document.dispatchEvent(event);
                    }} />
            </div>
        </div>
    );
}

export default Main;
