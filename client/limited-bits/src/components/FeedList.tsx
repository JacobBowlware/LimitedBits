import { useEffect, useState } from "react";

// Font Awesome Icons
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import FeedCard from "./common/FeedCard";

interface FeedCardProps {
    username: string;
    body: string;
    icon: string;
    _id?: number;
}

interface FeedListProps {
    feedItems: FeedCardProps[][];
    isMyBits?: boolean;
}

const FeedList = ({ feedItems, isMyBits }: FeedListProps) => {
    const [feedIndex, setFeedIndex] = useState<number>(0);
    const feedLength = feedItems.length;

    useEffect(() => {
        handleFeedIndexChange(0);
    }, []);

    // Handles all feed index changes & updates styling accordingly.
    const handleFeedIndexChange = (index: number) => {
        setFeedIndex(index);

        const leftFeedBtn = document.getElementById("feed-left-chevron");
        const rightFeedBtn = document.getElementById("feed-right-chevron");

        leftFeedBtn?.classList?.remove("link-null");
        rightFeedBtn?.classList?.remove("link-null");

        if (index === 0)
            leftFeedBtn?.classList?.add("link-null");
        else if (index === feedLength - 1)
            rightFeedBtn?.classList?.add("link-null");

        const feedNumBtns = document.getElementsByClassName("auth-home-feed-footer-nav__number");
        for (let i = 0; i < feedNumBtns.length; i++) {
            feedNumBtns[i].classList?.remove("link-null");
        }

        feedNumBtns[index].classList?.add("link-null");
    }

    return (
        <div className="auth-home-feed">
            {
                feedItems[feedIndex].map((data, key) => {
                    if (key >= 5) {
                        return null;
                    }

                    return (
                        isMyBits ? <FeedCard key={key} icon={data.icon ? data.icon.toString() : "faUser"} body={data.body} isMyBits={isMyBits} id={data._id} /> :
                            <FeedCard key={key} icon={data.icon ? data.icon.toString() : "faUser"} body={data.body} username={data.username ? data.username : "Temp Name"} />
                    )
                })}
            <div className="auth-home-feed-footer">
                <FontAwesomeIcon icon={faChevronLeft}
                    id="feed-left-chevron"
                    className="link auth-home-feed-footer__icon" onClick={() => {
                        if (feedIndex > 0 && !document.getElementById("feed-left-chevron")?.classList?.contains("link-null"))
                            handleFeedIndexChange(feedIndex - 1);
                    }} />
                <div className="auth-home-feed-footer-nav">
                    {
                        feedItems.map((data, key) => {
                            return (
                                <button key={key} onClick={() => handleFeedIndexChange(key)} className="link auth-home-feed-footer-nav__number">
                                    {key + 1}
                                </button>
                            )
                        })
                    }
                </div>
                <FontAwesomeIcon icon={faChevronRight}
                    id="feed-right-chevron"
                    className="link auth-home-feed-footer__icon" onClick={() => {
                        if (feedIndex < 4 && !document.getElementById("feed-right-chevron")?.classList?.contains("link-null"))
                            handleFeedIndexChange(feedIndex + 1);
                    }} />
            </div>
        </div>
    );
}

export type { FeedCardProps };
export default FeedList;