import { useState, useRef } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import UserImage from "./user-image/user-image";
import Menu from "./menu/menu";
import useClick from "hook/use-click";
import { User } from "types";
import { BiChevronDown } from "react-icons/bi";
import classes from "./drop-down.module.scss";

type PropType = Omit<User, "password">;

const DropDown = ({ user }: { user: PropType }) => {
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClick(() => {
    setIsMenu(false);
  }, menuRef);

  return (
    <div ref={menuRef} className={classes.drop}>
      <UserImage userName={user.userName} />
      <div className={classes.drop__user}>{user.userName}</div>
      <button className={classes.drop__btn} onClick={() => setIsMenu(!isMenu)}>
        <BiChevronDown className={classes.drop__btn_icon} />
      </button>
      {isMenu && <Menu user={user} />}
    </div>
  );
};

export default DropDown;
