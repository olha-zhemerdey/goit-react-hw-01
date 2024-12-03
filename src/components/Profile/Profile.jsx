import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileContainer}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;