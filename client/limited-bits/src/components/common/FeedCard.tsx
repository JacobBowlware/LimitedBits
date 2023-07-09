import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeedCardProps {
    username: string;
    body: string;
    icon: IconProp;
}

const FeedCard = ({ username, body, icon }: FeedCardProps) => {
    return (
        <div className="section-container__item-grid__item align-left home-feed-card">
            <div className="home-feed-card__header">
                <p className="home-feed-card__header-h3">
                    <FontAwesomeIcon className="home-feed-card__header-icon"
                        icon={icon} /> - {username}
                </p>
                <h3 className="home-feed-card__header__p">
                    {body}
                </h3>
            </div>
        </div>
    );
}

export default FeedCard;