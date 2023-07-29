import { useState } from "react";
import { Link } from "react-router-dom";

// Joi validation
import { validateProperty } from "../components/WebJoi";
import { User } from "../App";


interface LoginProps {
    onLoginSuccess: (userData: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const [emailError, setEmailError] = useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Send the login data to the server and get the response
            //  const response = await login(loginData);
            const response = {
                headers: {
                    'x-auth-token': 'token'
                },
                data: {
                    id: 1,
                    username: "JohnDoe",
                    icon: "faUserTie",
                    email: "JohnDoe@gmail.com"
                }
            }

            // Extract the token from the response's headers
            const token = response.headers['x-auth-token'];

            // Save the token in the browser's local storage for persistent login
            localStorage.setItem('token', token);

            // Extract the user data from the response's body
            const userData: User = response.data;

            // Call the onLoginSuccess function passed from the parent component
            onLoginSuccess(userData);
        } catch (error) {
            // Handle login error
            alert(error)
        }
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