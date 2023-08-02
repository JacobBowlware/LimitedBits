// React
import { useEffect, useState } from "react";

// Axios 
import axios from 'axios';

// Components
import PopupForm from "../../components/PopupForm";
import FeedList from "../../components/FeedList";

const AuthHome = () => {
    const [feedBits, setFeedBits] = useState([[]]);

    useEffect(() => {
        const getFeed = async () => {
            // Call Backend and retrieve bits
            const config = {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            }
            const response = await axios.get('http://localhost:3000/api/posts/feed', config);

            setFeedBits(response.data);
        }

        getFeed();
    }, []);

    return (
        <>
            <div className="section-container section-container-light section-container-tall ">
                <div id="overlay"></div>
                <div className="section-container__item">
                    <div className="auth-home-header-container">
                        <h1 className="section-container__header">
                            <span className="text-highlight">Todays</span> Bits
                        </h1>
                        <div className="auth-home-header-icons">
                            <div className="section-container__item popup-center">
                                <button id="show-popup" className="btn btn-primary">
                                    Post Bit
                                </button>
                            </div>
                        </div>
                    </div>
                    <PopupForm />
                    <FeedList feedItems={feedBits} />
                </div>
            </div>
        </>
    );
}

export default AuthHome;