import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../App";

interface PopupFormProps {
    userID: String | null;
}

const PopupForm: React.FC<{ id: number | undefined }> = ({ id }) => {
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        console.log(token); // Token is Valid Here

        const config = {
            headers: {
                'x-auth-token': token,
                'Random-Header': 'Random-ValueWOWOOWOWOOWOW'
            }
        };

        axios.post('http://localhost:3000/api/posts/create', {
            body: formInput,
            userID: id
        }, config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

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
