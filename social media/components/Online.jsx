import '../css/online.css'

export default function Online({user}) {
  return (
    <li className="rightbar-friend">
            <div className="rightbar-profileimage-container">
              <img className='rightbar-profileimage' src={user.profilePicture}/>
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
    </li>
  )
}
