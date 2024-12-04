import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classes = clsx(isOnline ? [css.onLine] : [css.offLine]);
  return (
    <div className={css.itemWrap}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classes}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
