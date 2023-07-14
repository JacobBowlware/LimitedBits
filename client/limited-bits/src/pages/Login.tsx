import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Login form submitted");
    }

    return (
        <>
            <div className="section-container login-container">
                <div className="login-card">
                    <h1 className="login-card__header form-header">
                        Login to  LimitedBits
                    </h1>
                    <form className="form login-card__form" onSubmit={(e) => handleSubmit(e)}>
                        <input type="email" id="email" className="form-input"
                            placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id="password" className="form-input"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn form-btn">Login</button>
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