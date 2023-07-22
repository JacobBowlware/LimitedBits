import { faUser, faUserSecret, faUserTie } from "@fortawesome/free-solid-svg-icons";
import FeedList, { FeedCardProps } from "../../components/FeedList";
import PopupForm from "../../components/PopupForm";

const userPosts: FeedCardProps[][] = [
    [
        {
            id: 1,
            body: "Overwhelm resistance with speed and suddenness.",
            username: "Jacob",
            icon: faUser
        },
        {
            id: 2,
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 2,
            body: "Never let your emotions overpower your intelligence.",
            username: "Johnathan",
            icon: faUserSecret
        },
        {
            id: 3,
            body: "Apples are delicious.",
            username: "Ted",
            icon: faUserTie
        },
    ],
    [
        {
            id: 6,
            body: "WOWOWOW",
            username: "JOJOJOOJ",
            icon: faUser
        },
        {
            id: 7,
            body: "Imagine losing to a bot",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 8,
            body: "Treat your body with respect.",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 9,
            body: "Always be yourself!",
            username: "Johnathan",
            icon: faUserSecret
        },
        {
            id: 10,
            body: "Spend your time wisely.",
            username: "Ted",
            icon: faUserTie
        },
    ]
];

const MyBits = () => {
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
                <FeedList feedItems={userPosts} isMyBits={true} />
            </div>
        </div>
    );
}

export default MyBits;