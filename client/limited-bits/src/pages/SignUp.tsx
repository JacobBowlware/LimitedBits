import { useState } from "react";
import { Link } from "react-router-dom";
import { validateProperty } from "../components/WebJoi";

const SignUp = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [confirmPassword, setConfirmPassword] = useState<String>("");

    const [emailError, setEmailError] = useState<String>("");
    const [passwordError, setPasswordError] = useState<String>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Sign up form submitted");
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        const error = validateProperty("email", e.target.value);
        setEmailError(error);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);

        const error = validateProperty("confirmPassword", e.target.value, password);
        setConfirmPasswordError(error);
    }

    return (
        <>
            <div className="section-container section-container-tall">
                <div className="form-card">
                    <h1 className=" form-header">
                        Sign Up for LimitedBits
                    </h1>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        {emailError && <p className="form-error">{emailError}</p>}
                        <input type="email" id="email" className="form-input"
                            placeholder="Email" onChange={(e) => handleEmailChange(e)} />
                        {passwordError && <p className="form-error">{passwordError}</p>}
                        <input type="password" id="password" className="form-input"
                            placeholder="Password" onChange={(e) => handlePasswordChange(e)} />
                        {confirmPasswordError && <p className="form-error">{confirmPasswordError}</p>}
                        <input type="password" id="repeatPassword" className="form-input"
                            placeholder="Repeat Password" onChange={(e) => handleRepeatPasswordChange(e)} />
                        <button type="submit" className="btn form-btn"
                            disabled={emailError || passwordError || confirmPasswordError ? true : false}
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