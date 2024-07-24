import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return friends.map((friend) => {
    return (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    );
  });
}

export default FriendList;
