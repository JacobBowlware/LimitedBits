import { faUser, faUserSecret, faUserTie } from "@fortawesome/free-solid-svg-icons";
import FeedList, { FeedCardProps } from "../../components/FeedList";

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
            body: "Believe in yourself!",
            username: "Yameli",
            icon: faUserSecret
        },
        {
            id: 8,
            body: "'Better one bad general than two good ones.' - Napoleon Bonaparte",
            username: "Grito",
            icon: faUserTie
        },
        {
            id: 9,
            body: "Never let your emotions overpower your intelligence.",
            username: "Johnathan",
            icon: faUserSecret
        },
        {
            id: 10,
            body: "Apples are delicious.",
            username: "Ted",
            icon: faUserTie
        },
    ]
];

const MyBits = () => {
    return (
        <div className="section-container section-container-light section-container-tall">
            <div className="section-container__item">
                <div className="auth-home-header-container">
                    <h1 className="section-container__header">
                        <span className="text-highlight">My</span> Bits
                    </h1>
                </div>
                <FeedList feedItems={userPosts} />
            </div>
        </div>
    );
}

export default MyBits;