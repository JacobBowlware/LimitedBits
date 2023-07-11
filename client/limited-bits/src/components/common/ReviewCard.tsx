import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewCardProps {
    name: string;
    review: string;
    rating: number;
}

const ReviewCard = ({ name, review, rating }: ReviewCardProps) => {
    return (
        <div className="home-review-card">
            <h3 className="home-review-card__header">
                {name}
                <div className="home-review-card__icon-container">
                    {[...Array(rating)].map((e, i) => {
                        return <FontAwesomeIcon key={i} icon={faStar} className="home-review-card__icon" />
                    })}
                </div>
            </h3>
            <p className="home-review-card__p">
                {review}
            </p>
        </div>
    );
}

export default ReviewCard;