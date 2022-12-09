import SearchBox from '../search/search-box';
import NavigationBar from '../ui/navigation-bar';
import classes from './header.module.scss';

const Header = () => {
return (
    <div className={classes.header}>
        <NavigationBar />
        <SearchBox />
    </div>
)
};

export default Header;