import Link from "next/link";
import classes from "./logo.module.scss";

const Logo = ({
  footer = false,
  form = false,
}: {
  footer?: boolean;
  form?: boolean;
}) => {
  const style = footer
    ? { fontSize: "var(--font-huge)" }
    : form
    ? { fontSize: "var(--font-md-2)" }
    : {};
  return (
    <div className={classes.logo}>
      <Link href="/" passHref legacyBehavior>
        <a style={style} className={classes.logo_txt}>
          skytra
        </a>
      </Link>
    </div>
  );
};

export default Logo;
