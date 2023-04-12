import { Fragment, Key, memo } from "react";
import classes from "./amenities-list.module.scss";

type facility = {
  groupeName: string;
  facilities: string[];
};

const AmenitiesList = ({ facilityList }: any) => {
  return (
    <Fragment>
      {facilityList &&
        facilityList.map(
          (
            list: { groupeName: string; facilities: any[] },
            idx: Key | null | undefined
          ) => (
            <div key={idx} className={classes.list}>
              <h4 className={classes.list__name}>{list.groupeName}</h4>
              {list.facilities.map((facility, idx2) => (
                <ul key={idx2} className={classes.list__ulist}>
                  <li className={classes.list__item}>{facility}</li>
                </ul>
              ))}
            </div>
          )
        )}
    </Fragment>
  );
};

export default memo(AmenitiesList);
