import { useEffect, useState } from "react";

// Font Awesome Icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUser, faUserSecret, faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeedCardProps {
    username?: string;
    body: string;
    icon: string;
    isMyBits?: boolean;
    id?: number;
}

const FeedCard = ({ username, body, icon, isMyBits }: FeedCardProps) => {
    const [iconObject, setIconObject] = useState<IconProp>(faUser);

    const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // TODO: Delete the bit from the database.
    }

    useEffect(() => {
        // Get the correct icon set
        if (icon === "faUserSecret") {
            setIconObject(faUserSecret);
        }
        else if (icon === "faUserTie") {
            setIconObject(faUserTie);
        }
    }, [])

    return (
        <div className="section-container__item-grid__item align-left home-feed-card">
            <div className="home-feed-card__header">
                {username ? <p className="home-feed-card__header-h3">
                    <FontAwesomeIcon className="home-feed-card__header-icon"
                        icon={iconObject} /> - {username}
                </p> : <></>}
                <h3 className="home-feed-card__header__p">
                    {body}
                    {isMyBits ? <button className="btn home-feed-card__header-delete-btn" onClick={(e) => handleDelete(e)}>
                        <FontAwesomeIcon className="home-feed-card__header-delete-icon" icon={faXmark} />
                    </button> : <></>}
                </h3>
            </div>
        </div>
    );
}

export default FeedCard;