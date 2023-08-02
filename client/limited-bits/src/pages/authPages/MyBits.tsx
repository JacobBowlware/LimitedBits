// Component
import FeedList from "../../components/FeedList";
import PopupForm from "../../components/PopupForm";

const MyBits: React.FC<{ id: number | undefined }> = ({ id }) => {
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
                <PopupForm id={id} />
                {/* <FeedList feedItems={userPosts} isMyBits={true} /> */}
            </div>
        </div>
    );
}

export default MyBits;