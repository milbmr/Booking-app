import React, { useMemo } from "react";
import { amenityReturnType } from "types";
import classes from "./amenities.module.scss";
import AmenityItem from "../amenity-item/amenity-item";

const Amenities = ({
  amentiesData,
}: {
  amentiesData: amenityReturnType[] | undefined;
}) => {
  const amentyIcons = amentiesData!.slice(0, 12);

  return (
    <div className={classes.amenties}>
      <div className={classes.amenties__facilities}>
        {amentyIcons &&
          amentyIcons.map((amnty, idx) => (
            <AmenityItem key={idx} amenity={amnty.name} Icon={amnty.icon} />
          ))}
      </div>
    </div>
  );
};

export default React.memo(Amenities);
