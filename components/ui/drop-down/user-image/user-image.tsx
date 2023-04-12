import { getUserNameLetter } from "lib/helpers";
import classes from "./user-image.module.scss";

const UserImage = ({
  userName,
  large = false,
}: {
  userName: string | undefined;
  large?: boolean;
}) => {
  const style = large
    ? { width: "4rem", height: "4rem" }
    : { width: "3rem", height: "3rem" };

  return (
    <div style={style} className={classes.image}>
      <span
        style={large ? { fontSize: "var(--font-md-2)" } : {}}
        className={classes.image__letter}
      >
        {getUserNameLetter(userName)}
      </span>
    </div>
  );
};

export default UserImage;
