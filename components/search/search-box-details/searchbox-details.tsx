import Search from "../search/search";
import classes from "./searchbox-details.module.scss";

const SearchBoxDetails = () => {
    return(
        <div className={`container ${classes.search}`}>
            <Search />
        </div>
    )
};

export default SearchBoxDetails;