import '../css/closefriend.css'

export default function Closefriend({user}) {
  return (
    <li className="sidebar-friend">
        <img src={user.profilePicture}/>
        <span className="sidebar-friend-name">{user.username}</span>
    </li>
  )
}
