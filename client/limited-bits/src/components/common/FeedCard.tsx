import { useState } from "react";

// Font Awesome Icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FeedCardProps {
    username?: string;
    body: string;
    icon: IconProp;
    isMyBits?: boolean;
    id?: number;
}

const FeedCard = ({ username, body, icon, isMyBits }: FeedCardProps) => {
    const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // TODO: Delete the bit from the database.
    }

    return (
        <div className="section-container__item-grid__item align-left home-feed-card">
            <div className="home-feed-card__header">
                {username ? <p className="home-feed-card__header-h3">
                    <FontAwesomeIcon className="home-feed-card__header-icon"
                        icon={icon} /> - {username}
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