import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>{tag}v</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.profileList}>
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