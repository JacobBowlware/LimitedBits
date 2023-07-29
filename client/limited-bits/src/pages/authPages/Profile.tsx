
import { Link } from "react-router-dom";
import { User } from "../../App";

const Profile = ({ user }: { user: User | null }) => {
    if (!user)
        return null;

    const handleLogout = () => {
        localStorage.removeItem("token");
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
                            <span className="text-highlight">Username:</span> {user.username}
                        </p>
                        <p className="form-card__item__text">
                            <span className="text-highlight">Email:</span> {user.email}
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