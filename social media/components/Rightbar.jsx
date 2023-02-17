import '../css/rightbar.css'
import { Users } from '../dummyData'
import Online from './Online'

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className='birthday-image' src='https://th.bing.com/th/id/R.8714d88a459654f9a10f9bd0d32f70a6?rik=cSIK26FXRvaRtA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-pDEOqa_JUYg%2fUQ_ThWsmnCI%2fAAAAAAAAAlw%2f0pspYKvArt4%2fs640%2ffacebook%2bbirthday%2bnine_1.jpg&ehk=sO3W2uuftPEFXOIzWN86%2bSfhbQxUyfEGCiaSuOXOyZM%3d&risl=&pid=ImgRaw&r=0'/>
          <span className="birthday-text"><b>Steve </b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbar-ad' src='https://th.bing.com/th/id/R.210807fbd28f8dcb1077fbe3599660b4?rik=7YA35sYsupa1zg&riu=http%3a%2f%2fmoussyusa.com%2fwp-content%2fuploads%2f2020%2f08%2fFacebook-Ad-in-photoshop-free-download.jpg&ehk=zVzxd7xHNFRvEkLgf5yHvkM%2bum7ATQf72ZLlSazjlUg%3d&risl=&pid=ImgRaw&r=0'/>
        <h4>Online Friends</h4>
        <ul className="rightbar-friendlist">
            {Users.map(user=>(
              <Online key={user.id} user={user}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbar-title'>User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">PH</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">PH</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>
        <h4 className='rightbar-title'>User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>

          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>

          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>

          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>

          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>

          <div className="rightbar-following">
            <img src="https://th.bing.com/th/id/R.c84a8427dadfe5cb77c6d55c88102d4d?rik=Dp681NbFd%2bFr4A&pid=ImgRaw&r=0" alt="" className="rightbar-following-image" />
            <span className="rightbar-following-name">John Solomon</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}
