import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import classes from "./skeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const BoxSkeleton = () => {
  return (
    <div className={classNames(classes.box)}>
      <div className={classNames(classes.image)}>
        <Skeleton height="100%" width="100%" style={{ display: "block", borderRadius: '8px' }} />
      </div>
      <div className={classNames(classes.info)}>
        <Skeleton
          height="10%"
          width="70%"
          style={{ display: "inline-block", margin: "5px 0 0 10px" }}
        />
        <Skeleton
          height="15%"
          width="30%"
          style={{ display: "inline-block", margin: "0 0 0 10px" }}
        />
        <Skeleton
          height="10%"
          width="50%"
          style={{ display: "inline-block", margin: "0 0 0 10px" }}
        />
      </div>
      <div className={classNames(classes.action)}>
        <div className={classNames(classes.action_box)}>
          <Skeleton
            height="30%"
            width="50%"
            style={{ display: "inline-block" }}
          />
          <Skeleton
            height="60%"
            width="100%"
            style={{ display: "inline-block", marginTop: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
