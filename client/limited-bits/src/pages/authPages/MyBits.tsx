// Component
import { useEffect } from "react";
import FeedList from "../../components/FeedList";
import PopupForm from "../../components/PopupForm";
import axios from "axios";

const MyBits = () => {

    useEffect(() => {
        const fetchUserPosts = async () => {
            const config = {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            }

            const response = await axios.get('/api/bits/user/me', config);
            console.log(response.data);
        }

        fetchUserPosts();
    }, [])

    return (
        <div className="section-container section-container-light section-container-tall">
            <div id="overlay"></div>
            <div className="section-container__item">
                <div className="auth-home-header-container">
                    <h1 className="section-container__header">
                        <span className="text-highlight">My</span> Bits
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
                {/* <FeedList feedItems={userPosts} isMyBits={true} /> */}
            </div>
        </div>
    );
}

export default MyBits;