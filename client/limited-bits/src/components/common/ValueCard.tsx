import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ValueCardProps {
    icon: IconProp;
    header: string;
    body: string;
    highlight: boolean;
}

const ValueCard = ({ icon, header, body, highlight = false }: ValueCardProps) => {
    return (
        <div className={"value-card " + (highlight ? "value-card-highlight" : "")}>
            <FontAwesomeIcon className={"value-card__icon " +
                (highlight ? "value-card-highlight" : "")} icon={icon} />
            <h3 className="value-card__header">
                {header}
            </h3>
            <p className={"value-card__p " +
                (highlight ? "value-card-highlight" : "")}>
                {body}
            </p>
        </div>
    );
}

export default ValueCard;