import axios from "axios";
import { useState, useEffect } from "react";

const fetchUserLastPostDate = async () => {
    const config = {
        headers: {
            'x-auth-token': localStorage.getItem('token')
        }
    }
    const response = await axios.get('http://localhost:3000/api/posts/date-of-last-post', config);

    return response.data;
}

const PopupForm = () => {
    const [formInput, setFormInput] = useState<String>("");
    const [isDisabled, setIsDisabled] = useState<Boolean>(false);
    const [daysTillNextPost, setDaysTillNextPost] = useState<Number>(0);

    useEffect(() => {
        const fetchUserPostDate = async () => {
            const userLastPostDate = await fetchUserLastPostDate();

            if (userLastPostDate) {
                const today = new Date();
                const lastPostDate = new Date(userLastPostDate);

                const diffTime = Math.abs(today.getTime() - lastPostDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                setDaysTillNextPost(7 - diffDays);

                if (diffDays < 7) {
                    document.querySelector("#post-bit-btn")?.setAttribute("disabled", "true");
                    setIsDisabled(true);
                }
            }
        }

        document.querySelector("#show-popup")?.addEventListener("click", () => {
            document.querySelector(".section-container__item .popup")?.classList.add("active");
            document.querySelector("#overlay")?.classList.add("overlay");
        });

        document.querySelector(".popup .close-btn")?.addEventListener("click", () => {
            document.querySelector(".popup")?.classList.remove("active");
            document.querySelector("#overlay")?.classList.remove("overlay");
        });

        fetchUserPostDate();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'x-auth-token': token,
            }
        };

        axios.post('http://localhost:3000/api/posts/create', {
            body: formInput
        }, config)
            .then((response) => {
                window.location.reload();
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
                {isDisabled ? <h2>You Can't Post Yet</h2> : <h2>Share Your Bit</h2>}
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <textarea className="form-input" rows={3}
                        maxLength={180}
                        placeholder={isDisabled ? "You must wait " + daysTillNextPost + " days before posting again..." : "Type your bit here..."} onChange={(e) => setFormInput(e.target.value)} />
                    <button className="btn btn-primary" id="post-bit-btn">Post Bit</button>
                </form>
                {!isDisabled && <p className="form-helper text-dark">Keep in mind, you can only post one bit per week.</p>}</div>
        </div>
    );
};

export default PopupForm;
