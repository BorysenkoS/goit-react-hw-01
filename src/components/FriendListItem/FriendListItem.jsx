import css from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendList}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          isOnline ? css.friendStatusOnline : css.friendStatusOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
