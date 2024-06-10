import p from "./Profile.module.css"
const Profile = () => {
    return (
      <div className={p.content}>
      <div>
      <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"/>
      </div>
      <div>ava + desc</div>
      <div>My posts</div>
      <div>New posts</div>
      <div className={p.posts}>
        <div className={p.item}>post1</div>
        <div className={p.item}>post2</div>
      </div>
    </div>)
}
export default Profile