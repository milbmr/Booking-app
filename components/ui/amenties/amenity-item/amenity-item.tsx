import classes from "./amenity-item.module.scss";
import { IconType } from "react-icons";

const AmenityItem = ({amenity, Icon}: {amenity: string; Icon: IconType}) => {
    return(
        <div className={classes.item}>
            <Icon className={classes.item__icon} />
            <p className={classes.item__text}>{amenity}</p>
        </div>
    )
}

export default AmenityItem;