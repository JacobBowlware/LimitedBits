import { useEffect, useState } from "react";

// Font Awesome Icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faUser, faUserSecret, faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

interface FeedCardProps {
    username?: string;
    body: string;
    icon: string;
    isMyBits?: boolean;
    id?: number;
}

const FeedCard = ({ username, body, icon, isMyBits, id }: FeedCardProps) => {
    const [iconObject, setIconObject] = useState<IconProp>(faUser);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);
    const [iconDeleted, setIconDeleted] = useState<boolean>(false);

    const handleDelete = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (deleteMode) {
            // Delete the bit
            try {
                const config = {
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                }
                const response = await axios.delete("http://localhost:3000/api/posts/" + id, config);
                console.log(response);
            }
            catch (err) {
                console.log(err);
            }
            setIconDeleted(true);
        }
        else {
            // Set delete mode to true
            setDeleteMode(true);
        }

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

    if (iconDeleted) {
        return <></>;
    }

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
                        <FontAwesomeIcon className="home-feed-card__header-delete-icon" icon={deleteMode ? faTrash : faXmark} />
                    </button> : <></>}
                </h3>
            </div>
        </div>
    );
}

export default FeedCard;