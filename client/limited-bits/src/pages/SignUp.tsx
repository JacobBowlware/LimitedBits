// React
import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import { validateProperty } from "../components/WebJoi";
import { User } from "../App";

// Axios
import axios from "axios";

interface SignupProps {
    onLoginSuccess: (userData: User) => void;
}

const SignUp: React.FC<SignupProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState<String>("");
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [confirmPassword, setConfirmPassword] = useState<String>("");

    const [usernameError, setUsernameError] = useState<String>("");
    const [emailError, setEmailError] = useState<String>("");
    const [passwordError, setPasswordError] = useState<String>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<String>("");

    const handleIconSelection = (): string => {
        const icons = ["faUser", "faUserSecret", "faUserTie"];
        const randomIndex = Math.floor(Math.random() * icons.length);
        const selectedIcon = icons[randomIndex];

        return selectedIcon;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const icon = handleIconSelection();

        const signupData = {
            username: username,
            email: email,
            password: password,
            icon: icon
        }

        try {
            const response = await axios.post("http://localhost:3000/api/users/", signupData);

            const token = response.headers['x-auth-token'];
            localStorage.setItem('token', token);

            const userData: User = response.data;

            console.log(userData);
            onLoginSuccess(userData);
        }
        catch (error) {
            setUsernameError("Username or email already exists.");
        }
    }

    const handleInputChange = (inputField: string, e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputField === "username") {
            setUsername(e.target.value);

            const error = validateProperty("username", e.target.value);
            setUsernameError(error);
        }
        else if (inputField === "email") {
            setEmail(e.target.value);

            const error = validateProperty("email", e.target.value);
            setEmailError(error);
        }
        else if (inputField === "password") {
            setPassword(e.target.value);

            const error = validateProperty("password", e.target.value, confirmPassword);

            if (error === null) {
                setConfirmPasswordError("");
                setPasswordError("");
            }
            else if (error === "Both passwords must match!") {
                setConfirmPasswordError(error);
                setPasswordError("");
            }
            else {
                setPasswordError(error);
            }
        }
        else if (inputField === "repeatPassword") {
            setConfirmPassword(e.target.value);

            const error = validateProperty("confirmPassword", e.target.value, password);
            setConfirmPasswordError(error);
        }
    }

    return (
        <>
            <div className="section-container section-container-tall">
                <div className="form-card">
                    <h1 className=" form-header">
                        Sign Up for LimitedBits
                    </h1>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        {usernameError && <p className="form-error">{usernameError}</p>}
                        <input type="text" id="username" className="form-input"
                            placeholder="Username" onChange={(e) => handleInputChange("username", e)} />
                        {emailError && <p className="form-error">{emailError}</p>}
                        <input type="email" id="email" className="form-input"
                            placeholder="Email" onChange={(e) => handleInputChange("email", e)} />
                        {passwordError && <p className="form-error">{passwordError}</p>}
                        <input type="password" id="password" className="form-input"
                            placeholder="Password" onChange={(e) => handleInputChange("password", e)} />
                        {confirmPasswordError && <p className="form-error">{confirmPasswordError}</p>}
                        <input type="password" id="repeatPassword" className="form-input"
                            placeholder="Repeat Password" onChange={(e) => handleInputChange("repeatPassword", e)} />
                        <button type="submit" className="btn form-btn"
                            disabled={emailError || passwordError || confirmPasswordError ? true : false
                                || !email || !password || !confirmPassword || !username}
                        >Sign Up</button>
                    </form>
                    <p className="form-helper">
                        Already have an account? <Link className="form-link" to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;