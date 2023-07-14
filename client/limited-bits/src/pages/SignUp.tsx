import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [repeatPassword, setRepeatPassword] = useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Sign up form submitted");
    }

    return (
        <>
            <div className="section-container login-container">
                <div className="login-card">
                    <h1 className="login-card__header form-header">
                        Sign Up for LimitedBits
                    </h1>
                    <form className="form login-card__form" onSubmit={(e) => handleSubmit(e)}>
                        <input type="email" id="email" className="form-input"
                            placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id="password" className="form-input"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" id="repeatPassword" className="form-input"
                            placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} />
                        <button type="submit" className="btn form-btn">Sign Up</button>
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