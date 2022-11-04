import { Fragment } from "react";

import classes from "./search.module.scss";
import { Bed, Calendar, User } from "phosphor-react";

const Search = () => {
  return (
    <Fragment>
      <form action="">
        <div className={classes.search}>
          <div className={classes.search__input}>
            <Bed size="3.2rem" weight="fill" />
            <input
              type="text"
              placeholder="Where are you going?"
              className={classes.search__input_box}
              required
            />
          </div>
          <div className={classes.search__calendar}>
            <div className={classes.search__calendar_icon}>
              <Calendar size="3.2rem" weight="fill" />
              <p>Thu 11/8 &lt; &gt;</p>
            </div>
            <div className={classes.search__calendar_line}>&nbsp;</div>
            <div className={classes.search__calendar_icon}>
              <Calendar size="3.2rem" weight="fill" />
              <p>Thu 11/8 &lt; &gt;</p>
            </div>
          </div>
          <div className={classes.search__accomodation}>
            <User size="3.2rem " weight="fill" />
            <p>1 Room, 1 Guest</p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
