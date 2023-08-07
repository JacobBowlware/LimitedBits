import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");

        setUsername(username!);
        setEmail(email!);

    }, [])


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        window.location.href = "/";
    }

    return (
        <>
            <div className="section-container section-container-tall">
                <div className="form-card">
                    <h1 className=" form-header">
                        <span className="text-highlight">My</span> Profile
                    </h1>
                    <div className="form-card__item">
                        <p className="form-card__item__text">
                            <span className="text-highlight">Username:</span> {username}
                        </p>
                        <p className="form-card__item__text">
                            <span className="text-highlight">Email:</span> {email}
                        </p>
                    </div>
                    <div>
                        <button className="btn form-button w-100" onClick={() => handleLogout()}>
                            Logout
                        </button>
                    </div>
                    <p className="form-helper">
                        To delete your acccount, please go <Link to="/delete-account" className="form-link">here</Link>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Profile;