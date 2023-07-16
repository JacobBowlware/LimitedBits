import { useState, useEffect } from "react";

const PopupForm = () => {
    const [formInput, setFormInput] = useState<String>("");

    useEffect(() => {
        document.querySelector("#show-popup")?.addEventListener("click", () => {
            document.querySelector(".section-container__item .popup")?.classList.add("active");
            document.querySelector("#overlay")?.classList.add("overlay");
        });

        document.querySelector(".popup .close-btn")?.addEventListener("click", () => {
            document.querySelector(".popup")?.classList.remove("active");
            document.querySelector("#overlay")?.classList.remove("overlay");
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Send users post to the Database.
    }
    return (
        <div className="section-container__item popup">
            <div className="close-btn">
                &times;
            </div>
            <div className="form">
                <h2>Share Your Bit</h2>
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <textarea className="form-input" rows={3}
                        maxLength={180}
                        placeholder="Type Your Bit Here" onChange={(e) => setFormInput(e.target.value)} />
                    <button className="btn btn-primary">Post Bit</button>
                </form>
                <p className="form-helper text-dark">Keep in mind, you can only post one bit per week.</p>
            </div>
        </div>
    );
};

export default PopupForm;
