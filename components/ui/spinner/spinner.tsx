import classNames from "classnames";
import classes from "./spinner.module.scss";
import { CSSProperties } from "react";

const Spinner = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: string;
  height?: string;
}) => {
  const style = {
    ...(color && { "--border-color": color }),
    ...(width && { "--width": width }),
    ...(height && { "--height": height }),
  } as CSSProperties;
  return <span className={classNames(classes.spinner)} style={style} />;
};

export default Spinner;
