// Component
import { useEffect, useState } from "react";
import FeedList from "../../components/FeedList";
import PopupForm from "../../components/PopupForm";
import axios from "axios";

const MyBits = () => {
    const [userPosts, setUserPosts] = useState([[]]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const config = {
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                }

                const response = await axios.get('http://localhost:3000/api/posts/me', config);
                console.log(response.data);

                setUserPosts(response.data);
            }
            catch (error) {
                console.log(error);
            }
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
                <div className="feed-list-container">
                    {userPosts.length !== 0 ? <FeedList feedItems={userPosts} isMyBits={true} /> :
                        <div className="my-bits-empty">
                            <h2 className="feed-list-container-header">You have not posted any bits yet.</h2>
                            <p className="feed-list-container-p">Click the button above to post your first bit!</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MyBits;