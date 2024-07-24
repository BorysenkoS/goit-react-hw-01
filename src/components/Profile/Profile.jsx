import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItems}>
          <span>Followers</span>
          <br />
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileItems}>
          <span>Views</span> <br />
          <span>{stats.views}</span>
        </li>
        <li className={css.profileItems}>
          <span>Likes</span> <br />
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
