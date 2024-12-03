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
      <div className={css.profileItems}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileSubtitle}>{tag}</p>
        <p className={css.profileSubtitle}>{location}</p>
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