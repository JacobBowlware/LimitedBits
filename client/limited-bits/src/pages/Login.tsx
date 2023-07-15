import { useState } from "react";
import { Link } from "react-router-dom";

// Joi validation
import { validateProperty } from "../components/WebJoi";


const Login = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const [emailError, setEmailError] = useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Login form submitted");
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const error = validateProperty("email", e.target.value);
        setEmailError(error);
    }

    return (
        <>
            <div className="section-container section-container-tall">
                <div className="form-card">
                    <h1 className="form-header">
                        Login to  LimitedBits
                    </h1>
                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        {emailError && <p className="form-error">{emailError}</p>}
                        <input type="email" id="email" className="form-input"
                            placeholder="Email" onChange={(e) => {
                                setEmail(e.target.value);
                                handleEmailChange(e);
                            }} />
                        <input type="password" id="password" className="form-input"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn form-btn"
                            disabled={emailError ? true : false}>Login</button>
                    </form>
                    <p className="form-helper">
                        Don't have an account? <Link className="form-link" to="/sign-up">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;