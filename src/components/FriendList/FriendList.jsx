import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(({ id, avatar, name, isOnline }) => {
      return (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      );
    })}
  </ul>
);
export default FriendList;
